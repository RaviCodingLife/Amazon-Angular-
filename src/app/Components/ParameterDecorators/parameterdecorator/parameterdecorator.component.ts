import { Component, OnInit } from '@angular/core';
import { AngularServiceService } from '../../Services/angular-service.service';

@Component({
  selector: 'app-parameterdecorator',
  templateUrl: './parameterdecorator.component.html',
  styleUrls: ['./parameterdecorator.component.css']
})
export class ParameterdecoratorComponent implements OnInit {

  data:any='';

  constructor( private user:AngularServiceService) {
    console.log(this.user.getData);
    this.data=this.user.getData();
    
   }

  ngOnInit(): void {
    console.log(this.data.name);
  }

}
