import {ɵNG_COMP_DEF} from '@angular/core';

/**
 * Note below key is still a private property of IVY (notice the "theta (ɵ)" symbol in front of it)
 * This might change in further angular versions
 */
const NG_COMP_FACTORY = 'ɵfac';

export function Unsubscribe(subscriptions: string[]): any {

  return (cmpType) => {
    const originalFactory = cmpType[NG_COMP_FACTORY];

    cmpType[NG_COMP_FACTORY] = (...args) => {
      const cmp = originalFactory(...args);

      cmp.ngOnDestroy = () => {
        if (cmpType.prototype.ngOnDestroy) {
          cmpType.prototype.ngOnDestroy();
        }

        subscriptions.forEach((key) => {
          const sub = cmp[key];
          console.log(sub);
          if (sub) {
            sub.unsubscribe();
          }
        });
      };

      return cmp;
    };

    return cmpType;
  };
}
