import { Component,HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';

  CurrentItem="This data Come from App(Parent) Component"

  items=['Cloth','Mobile','Shoes','Watch','Cards'];

  addItem(newitem:any){
      this.items.push(newitem);
  }

   
  constructor(){
    console.log('This is my App-Component');
    
  }
}
