import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-host-listener',
  templateUrl: './host-listener.component.html',
  styleUrls: ['./host-listener.component.css']
})
export class HostListenerComponent implements OnInit {

  @HostListener('click',['$event'])
  onhostClick(event:Event){
    alert('User Clicked on a Screen')
    console.log('User Clicked on a Screen');
    
  }

  constructor() { }

  ngOnInit(): void {
  }
}
