import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit {

  show=false;
  showone=true;
  disableone=false;

  show1=false;
  showone1=true;
  disableone1=false;

  showData(){
    this.show=true;
    this.showone=false;
    this.disableone=true;
  }

  showText(){
    this.show=false;
    this.showone=true;
    this.disableone=false;

  }

  showData1(){
    this.show1=true;
    this.showone1=false;
    this.disableone1=true;
  }

  showText1(){
    this.show1=false;
    this.showone1=true;
    this.disableone1=false;

  }

  constructor() { }

  ngOnInit(): void {
  }

}
