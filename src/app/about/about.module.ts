import {NgModule} from '@angular/core';
import {AboutRoutingModule} from './about-routing.module';
import {AboutComponent} from './about.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule {}
