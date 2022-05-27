import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-parent-to-do-list',
  templateUrl: './parent-to-do-list.component.html',
  styleUrls: ['./parent-to-do-list.component.css']
})
export class ParentToDoListComponent implements OnInit {

  @Output() newitem=new EventEmitter<any>();

  addNewItem(value:any){
    this.newitem.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
