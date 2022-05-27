import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreLoadingRoutingModule } from './pre-loading-routing.module';
import { PreloadingComponent } from './preloading/preloading.component';


@NgModule({
  declarations: [
    PreloadingComponent
  ],
  imports: [
    CommonModule,
    PreLoadingRoutingModule
  ]
})
export class PreLoadingModule { 
  constructor(){
    console.log('This is my Preload module');
  }
}
