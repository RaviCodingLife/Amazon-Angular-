import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadingComponent } from './preloading/preloading.component';

const routes: Routes = [
  {
    path:'preloading',
    component:PreloadingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreLoadingRoutingModule { }
