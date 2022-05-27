import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloading',
  templateUrl: './preloading.component.html',
  styleUrls: ['./preloading.component.css']
})
export class PreloadingComponent implements OnInit {

  constructor() { 
    console.log('This is my Preloading-Component');
  }

  ngOnInit(): void {
  }

}
