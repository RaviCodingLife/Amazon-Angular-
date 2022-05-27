import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-inc-dec',
  templateUrl: './counter-inc-dec.component.html',
  styleUrls: ['./counter-inc-dec.component.css']
})
export class CounterIncDecComponent implements OnInit {

  constructor() { }

  counter = 0;

  increment() {
    alert('item added to cart' + this.counter++);
  }
  decrement() {
    this.counter--;
    
  }

  ngOnInit(): void {
  }

}
