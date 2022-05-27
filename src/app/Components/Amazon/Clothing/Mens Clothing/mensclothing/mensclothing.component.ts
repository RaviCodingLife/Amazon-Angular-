import { Component, OnInit } from '@angular/core';
import { AngularServiceService } from 'src/app/Components/Services/angular-service.service';

@Component({
  selector: 'app-mensclothing',
  templateUrl: './mensclothing.component.html',
  styleUrls: ['./mensclothing.component.css']
})
export class MensclothingComponent implements OnInit {

  MensClothing:any

  constructor(private ClothingMens:AngularServiceService) { }

  ngOnInit(): void {
    this.getClothingM()
  }

  getClothingM(){
    this.ClothingMens.getmensclothing().then((res)=>{
      return res.json()
    }).then((Mens)=>{
      console.log(Mens);
      this.MensClothing=Mens
    })
  }

}
