import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  constructor() { }

  UserName="Sachin Saurabh";
  isDisabled=true;
  ClickCount=0;
  
  ClickMe(){
    this.isDisabled=false;
  }

  ClickMe1(){
    console.log(this.ClickCount ++);
  }

  ngOnInit(): void {
  }

}
