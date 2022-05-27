import { Component, OnInit } from '@angular/core';
import { AngularServiceService } from '../../Services/angular-service.service';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  UserData:any

  constructor( private Product:AngularServiceService) { }

  ngOnInit(): void {
    this.getuserData()
  }

  getuserData(){
    this.Product.fn().then((res)=>{
      return res.json()
    }).then((datauser)=>{
      console.log(datauser);
      this.UserData=datauser
    })
  }
}
