import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription, timer} from 'rxjs';
import {Unsubscribe} from '../unsubscribe';

@Unsubscribe(['counterSubscription'])
@Component({
  template: '<h3>Counter is on: {{ counter }}</h3>'
})
export class AboutComponent implements OnInit, OnDestroy {
  public counter = 0;
  public counterSubscription: Subscription;

  public ngOnInit(): void {
    this.counterSubscription = timer(0, 1000).subscribe((value) => {
      this.counter = value;
      console.log('counting...', value);
    });
  }

  public ngOnDestroy(): void {
    console.log('my own ngOnDestroy');

    // this.counterSubscription.unsubscribe();
  }
}
