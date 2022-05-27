import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-ani-to-do',
  templateUrl: './ani-to-do.component.html',
  styleUrls: ['./ani-to-do.component.css'],
  animations:[
    trigger("FadeinFadeOut",[

      state("void",style(   // Void State
        {
          "display":"none"
        }
      )),

      state("*",style(      //Default State
        {
          background:"green",
          color:"white"
        }
      )),

      transition("void => *",[animate(1000)]),
      transition('* => void',[animate(2000)])
    ])
  ]
})
export class AniToDoComponent implements OnInit {

  items:any=[];

  constructor() { }

  ngOnInit(): void {
  }

  newitem="";

  pushitem(){
    if(this.newitem !=""){
        this.items.push(this.newitem);
        this.newitem="";
    }
  }

  removeitem(index:any){
    console.log(index);
    this.items.splice(index,1);
    
  }

}
