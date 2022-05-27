import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  show=true;
  showone=true;
  disableone=false;

  showData(){
    this.show=false;
    this.showone=false;
    this.disableone=true;
  }

  showText(){
    this.show=true;
    this.showone=true;
    this.disableone=false;

  }

  constructor() { }

  ngOnInit(): void {
  }

}
