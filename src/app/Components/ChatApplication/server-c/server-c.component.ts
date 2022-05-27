import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-server-c',
  templateUrl: './server-c.component.html',
  styleUrls: ['./server-c.component.css']
})
export class ServerCComponent implements OnInit {

  @Input() clientData:string=""

  @Output() serverEvent=new EventEmitter()

  constructor() { }

  getDatafromServer(server:any){
    this.serverEvent.emit(server.value)
    server.value=""
  }

  ngOnInit(): void {
  }

}
