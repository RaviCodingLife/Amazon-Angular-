import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PreloadingStrategy, Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AngularServiceService implements PreloadingStrategy{
  //Data
  //   getData(){
  //   // return{
  //   //   // id:1,
  //   //   // name:'Sachin',
  //   //   // age:21,
  //   //   // address:'Pune',
  //   //   // course:'Full Satck Developer',
      
  //   // }
    
  // }

  
  //Custom PreLoading

  preload(route: Route, fn: () => Observable<any>): Observable<any>{

    if(route.data && route.data['preload']){
      return fn();
    }else{
      return of();
    }
  }
  
  


  //Observable

  url="https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get(this.url);
  }
  




    //Observable2

    private oburl='https://jsonplaceholder.typicode.com/todos';

    getObservable():Observable<any>{
      return this.http.get(this.oburl)
    }

    




  //Promise Object
  fn(){
    return fetch("https://jsonplaceholder.typicode.com/users")
  }







  //Amazon

  getCategories(){
    return  fetch("https://fakestoreapi.com/products")
    }
  
    getElectronics(){
      return fetch("https://fakestoreapi.com/products/category/electronics")
    }
  
    getjewelery(){
      return fetch("https://fakestoreapi.com/products/category/jewelery")
    }
  
  
    getmensclothing(){
      return fetch("https://fakestoreapi.com/products/category/men's%20clothing")
    }
  
  
    getwomenclothing(){
      return fetch("https://fakestoreapi.com/products/category/women's%20clothing")
    }

}
