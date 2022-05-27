import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.css']
})
export class ChatAppComponent implements OnInit {

  dataofClient:string=""

  dataofServer:string=""

  constructor() { }

  getDataFromClientC(data:any){
    this.dataofClient=data
    // alert(this.dataofClient)

  }

  getDatafromServerC(data:any){
    this.dataofServer=data
    // alert(this.dataofServer)
  }

  ngOnInit(): void {
  }

}
