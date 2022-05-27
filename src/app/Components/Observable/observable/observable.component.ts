import { Component, OnInit } from '@angular/core';
import { AngularServiceService } from '../../Services/angular-service.service';

interface Student {
  id: Number;
  name: String;
  email: String;
  gender: String;
}
  

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {


  students: Student[] = [
    {
      id: 1,
      name: "Hardik",
      email: "hardik@gmail.com",
      gender: "male"
    },
    {
      id: 2,
      name: "Paresh",
      email: "Paresh@gmail.com",
      gender: "male"
    },
    {
      id: 3,
      name: "Kiran",
      email: "kiran@gmail.com",
      gender: "female"
    },
    {
      id: 4,
      name: "Mahesh",
      email: "mahesh@gmail.com",
      gender: "male"
    },
    {
      id: 5,
      name: "Karan",
      email: "karan@gmail.com",
      gender: "male"
    },
  ]

  obsdata:any;

  constructor(private obs:AngularServiceService) {   }

  ngOnInit(){
    this.getData()
  }
  getData(){
    this.obs.getObservable().subscribe(
      (data) => console.log('Data received:', data),
      (err) => console.log('Error received:', err),
      () => console.log('Observable completed and will not emit any data ever again.')
    ); 
    
    
    console.log('subscribe works');
    

    
  }
}
