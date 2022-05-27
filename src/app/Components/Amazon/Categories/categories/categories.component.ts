import { Component, OnInit } from '@angular/core';
import { AngularServiceService } from 'src/app/Components/Services/angular-service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  Categories:any

  constructor(private AllCategories:AngularServiceService ) { }

  ngOnInit(): void {
    this.getProductCat()
  }

  getProductCat(){
    this.AllCategories.getCategories().then((res)=>{
      return res.json()
    }).then((cate)=>{
      console.log(cate);
      this.Categories=cate
    })
  }
}
