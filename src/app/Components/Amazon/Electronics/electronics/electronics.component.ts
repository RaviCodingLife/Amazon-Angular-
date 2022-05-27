import { Component, OnInit } from '@angular/core';
import { AngularServiceService } from 'src/app/Components/Services/angular-service.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  Electronics:any

  constructor(private Elect:AngularServiceService) { }

  ngOnInit(): void {
    this.getCatElectronics()
  }
getCatElectronics(){
  this.Elect.getElectronics().then((res)=>{
    return res.json()
  }).then((electronicsP)=>{
    console.log(electronicsP);
    this.Electronics=electronicsP
  })
}
}
