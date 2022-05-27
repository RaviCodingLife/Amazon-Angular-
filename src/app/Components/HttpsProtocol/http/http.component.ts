import { Component, OnInit } from '@angular/core';
import { AngularServiceService } from '../../Services/angular-service.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  infos:any;

  constructor(private user:AngularServiceService) { }

  ngOnInit(): void {
    this.user.getData().subscribe(info=>this.infos=info);
    console.log(this.infos);
    
  }

}
