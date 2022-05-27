import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  constructor() { }

  Name="Sachin Saurabh";
  UserName="Sachin@123";
  Marks=90;
  Subject='English';

  ngOnInit(): void {
  }

}
