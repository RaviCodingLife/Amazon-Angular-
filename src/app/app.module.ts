import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InterpolationComponent } from './Components/interpolation/interpolation.component';
import { PropertybindingComponent } from './Components/propertybinding/propertybinding.component';
import { EventbindingComponent } from './Components/eventbinding/eventbinding.component';
import { TwowaydatabindingComponent } from './Components/twowaydatabinding/twowaydatabinding.component';

import { SignInComponent } from './Components/adminModule/sign-in/sign-in.component';
import { SignUpComponent } from './Components/adminModule/sign-up/sign-up.component';
import { LoginComponent } from './Components/userModule/login/login.component';
import { RegisterComponent } from './Components/userModule/register/register.component';
import { NgIfComponent } from './Components/Structural Directives/ng-if/ng-if.component';
import { NgForComponent } from './Components/Structural Directives/ng-for/ng-for.component';
import { NgSwitchComponent } from './Components/Structural Directives/ng-switch/ng-switch.component';
import { NgStyleComponent } from './Components/Attribute Directives/ng-style/ng-style.component';
import { NgModuleComponent } from './Components/Attribute Directives/ng-module/ng-module.component';
import { NgClassComponent } from './Components/Attribute Directives/ng-class/ng-class.component';
import { BootstrapComponent } from './Components/Bootstrap/bootstrap/bootstrap.component';
import { ChildComponent } from './Components/Decorators/InputDecorators/child/child.component';
import { ParentToDoListComponent } from './Components/Decorators/OutputDecorators/parent-to-do-list/parent-to-do-list.component';
import { HostListenerComponent } from './Components/MethodDecorators/host-listener/host-listener.component';
import { ParameterdecoratorComponent } from './Components/ParameterDecorators/parameterdecorator/parameterdecorator.component';
import { ChatAppComponent } from './Components/ChatApplication/chat-app/chat-app.component';
import { ServerCComponent } from './Components/ChatApplication/server-c/server-c.component';
import { ClientCComponent } from './Components/ChatApplication/client-c/client-c.component';
import { HttpComponent } from './Components/HttpsProtocol/http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularServiceService } from './Components/Services/angular-service.service';
import { PromiseComponent } from './Components/Promise object/promise/promise.component';
import { NgSwitchfilteringComponent } from './Components/ng-switchfiltering/ng-switchfiltering.component';
import { AmazonComponent } from './Components/Amazon/amazon/amazon.component';
import { NavbarComponent } from './Components/NavBar/navbar/navbar.component';
import { CarouselComponent } from './Components/Carousel/carousel/carousel.component';
import { AmazoncardComponent } from './Components/Amazon/AmazonCard/amazoncard/amazoncard.component';
import { FooterComponent } from './Components/Amazon/AmzonFooter/footer/footer.component';
import { AmazonprimeComponent } from './Components/Amazon/Amazon Prime/amazonprime/amazonprime.component';
import { CategoriesComponent } from './Components/Amazon/Categories/categories/categories.component';
import { MensclothingComponent } from './Components/Amazon/Clothing/Mens Clothing/mensclothing/mensclothing.component';
import { WomenclothingComponent } from './Components/Amazon/Clothing/Women Clothing/womenclothing/womenclothing.component';
import { ElectronicsComponent } from './Components/Amazon/Electronics/electronics/electronics.component';
import { JeweleryComponent } from './Components/Amazon/Jewelery/jewelery/jewelery.component';
import { ClothingComponent } from './Components/Amazon/Clothing/clothing/clothing.component';
import { FaqComponent } from './Components/Amazon/faq/faq.component';
import { ChatwithusComponent } from './Components/Amazon/chatwithus/chatwithus.component';
import { ObservableComponent } from './Components/Observable/observable/observable.component';
import { LazyLoadingModule } from './Components/lazy-loading/lazy-loading.module';
import { PreLoadingModule } from './Components/pre-loading/pre-loading.module';
import { LazyNavBarComponent } from './Components/lazy-nav-bar/lazy-nav-bar.component';
import { CounterIncDecComponent } from './Components/counter-inc-dec/counter-inc-dec.component';
import { JsonfetchComponent } from './Components/jsonfetch/jsonfetch.component';
import { SpaCom1Component } from './Components/Single-Page-App/spa-com1/spa-com1.component';
import { SpaCom2Component } from './Components/Single-Page-App/spa-com2/spa-com2.component';
import { SpaPageNotFoundComponent } from './Components/Single-Page-App/spa-page-not-found/spa-page-not-found.component';
import { SpaHomeComponent } from './Components/Single-Page-App/spa-home/spa-home.component';
import { RouterModule } from '@angular/router';
import { AmazonHomeComponent } from './Components/Amazon/amazon-home/amazon-home.component';
import { AngularFormsComponent } from './Components/FormValidation/angular-forms/angular-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AniToDoComponent } from './Components/To-Do-List with Animation/ani-to-do/ani-to-do.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AnimationComponent } from './Components/animation/animation.component';





@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertybindingComponent,
    EventbindingComponent,
    TwowaydatabindingComponent,
    SignInComponent,
    SignUpComponent,
    LoginComponent,
    RegisterComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    NgStyleComponent,
    NgModuleComponent,
    NgClassComponent,
    BootstrapComponent,
    ChildComponent,
    ParentToDoListComponent,
    HostListenerComponent,
    ParameterdecoratorComponent,
    ChatAppComponent,
    ServerCComponent,
    ClientCComponent,
    HttpComponent,
    PromiseComponent,
    NgSwitchfilteringComponent,
    AmazonComponent,
    NavbarComponent,
    CarouselComponent,
    AmazoncardComponent,
    FooterComponent,
    AmazonprimeComponent,
    CategoriesComponent,
    MensclothingComponent,
    WomenclothingComponent,
    ElectronicsComponent,
    JeweleryComponent,
    ClothingComponent,
    FaqComponent,
    ChatwithusComponent,
    ObservableComponent,
    LazyNavBarComponent,
    CounterIncDecComponent,
    JsonfetchComponent,
    SpaCom1Component,
    SpaCom2Component,
    SpaPageNotFoundComponent,
    SpaHomeComponent,
    AmazonHomeComponent,
    AngularFormsComponent,
    AniToDoComponent,
    AnimationComponent,
  
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LazyLoadingModule,
    ReactiveFormsModule,
    PreLoadingModule,
    BrowserAnimationsModule,

    RouterModule,
    // .forRoot([
    //   {path: 'home', component: SpaHomeComponent},
    //   {path: 'crisis-list', component: SpaCom1Component},
    //   {path: 'heroes-list', component: SpaCom2Component},
    //   {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
    //   {path: '**', component: SpaPageNotFoundComponent}
    // ]),
  ],
  providers: [AngularServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('This is my App-Module');
    
  }
 }
