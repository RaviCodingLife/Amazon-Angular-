import { Component, OnInit } from '@angular/core';
import { AngularServiceService } from 'src/app/Components/Services/angular-service.service';

@Component({
  selector: 'app-womenclothing',
  templateUrl: './womenclothing.component.html',
  styleUrls: ['./womenclothing.component.css']
})
export class WomenclothingComponent implements OnInit {

  WomensClothing:any

  constructor(private ClothingWomen:AngularServiceService ) { }

  ngOnInit(): void {
    this.getClothingW()
  }

  getClothingW(){
    this.ClothingWomen.getwomenclothing().then((res)=>{
      return res.json()
    }).then((Womens)=>{
      console.log(Womens);
      this.WomensClothing=Womens
    })
  }
}
