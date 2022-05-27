import { Component, OnInit } from '@angular/core';
import { AngularServiceService } from 'src/app/Components/Services/angular-service.service';

@Component({
  selector: 'app-jewelery',
  templateUrl: './jewelery.component.html',
  styleUrls: ['./jewelery.component.css']
})
export class JeweleryComponent implements OnInit {

  Jewelery:any

  constructor(private JeweleryP:AngularServiceService) { }

  ngOnInit(): void {
    this.getJew()
  }

  getJew(){
    this.JeweleryP.getjewelery().then((res)=>{
      return res.json()
    }).then((jewP)=>{
      console.log(jewP);
      this.Jewelery=jewP
    })
  }
}
