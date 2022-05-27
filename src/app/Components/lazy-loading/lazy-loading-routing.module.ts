import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyloadingComponent } from './lazyloading/lazyloading.component';

const routes: Routes = [
  {
    path:'lazyloading',
    component:LazyloadingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingRoutingModule { }
