// import { PreloadAllModules, PreloadingStrategy } from '@angular/router';
// import { PromiseComponent } from './Components/Promise object/promise/promise.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './Components/adminModule/sign-in/sign-in.component';
import { SignUpComponent } from './Components/adminModule/sign-up/sign-up.component';
import { AmazonprimeComponent } from './Components/Amazon/Amazon Prime/amazonprime/amazonprime.component';
import { AmazonHomeComponent } from './Components/Amazon/amazon-home/amazon-home.component';
import { AmazonComponent } from './Components/Amazon/amazon/amazon.component';
import { CategoriesComponent } from './Components/Amazon/Categories/categories/categories.component';
import { ChatwithusComponent } from './Components/Amazon/chatwithus/chatwithus.component';
import { ClothingComponent } from './Components/Amazon/Clothing/clothing/clothing.component';
import { ElectronicsComponent } from './Components/Amazon/Electronics/electronics/electronics.component';
import { FaqComponent } from './Components/Amazon/faq/faq.component';
import { JeweleryComponent } from './Components/Amazon/Jewelery/jewelery/jewelery.component';
import { NavbarComponent } from './Components/NavBar/navbar/navbar.component';



const routes: Routes = [
  // {
  //   path:"lazy-loading",loadChildren:()=>import ('./Components/lazy-loading/lazy-loading.module')
  //   .then(mod=>mod.LazyLoadingModule)
  // },
  // {
  //   path:"pre-loading",data:{preload:true},loadChildren:()=>import ('./Components/pre-loading/pre-loading.module')
  //   .then(mod1=>mod1.PreLoadingModule)
  // },
  // {
  //   path:"ngfor",component:PromiseComponent
  // },



  //Amazon E-Commerce Website

  
  //Default Route
  {path:'',redirectTo:'home',pathMatch:'full'}, 


  {
    path:'home',
    component:AmazonHomeComponent
  },
  {
    path:'navBar',
    component:NavbarComponent
  },
  {
    path:'sign-in',
    component:SignInComponent
  },
  {
    path:'sign-up',
    component:SignUpComponent
  },
  {
    path:'amazon-prime',
    component:AmazonprimeComponent
  },
  {
    path:'all-categories',
    component:CategoriesComponent
  },
  {
    path:'chat-with-us',
    component:ChatwithusComponent
  },
  {
    path:'clothing',
    component:ClothingComponent
  },
  {
    path:'electronics',
    component:ElectronicsComponent
  },
  {
    path:'jewelery',
    component:JeweleryComponent
  },
  {
    path:'faq',
    component:FaqComponent
  },

  //Invalid Route
  {path:'**',redirectTo:'home'}, 
  
  
];

@NgModule({
  // imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
