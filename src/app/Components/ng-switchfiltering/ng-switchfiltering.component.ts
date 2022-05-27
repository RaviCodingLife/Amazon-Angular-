import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switchfiltering',
  templateUrl: './ng-switchfiltering.component.html',
  styleUrls: ['./ng-switchfiltering.component.css']
})
export class NgSwitchfilteringComponent implements OnInit {



  userDetails:any[]=[]
  details:any[]=[]
  hideRadio:boolean=false

  fetch(){
    fetch("https://randomuser.me/api/?results=50").then((res)=>{
       return res.json()
    }).then((data)=>{
      console.log(data.results);
      this.userDetails=data.results
      this.details=data.results
      this.hideRadio=true
      
    })
  }

  filter(event:any){
    // alert("working")
    // alert(event.target.value)
    if(event.target.value==='male'){
       this.userDetails=this.details.filter((ele:any)=>{
      return  ele.gender==='male'
      })
  }else if(event.target.value==='female'){
      this.userDetails=this.details.filter((ele:any)=>{
    return  ele.gender==='female'
    })
  }else {
      this.userDetails=this.details
  }
}

  constructor() { }

  ngOnInit(): void {
  }

}
