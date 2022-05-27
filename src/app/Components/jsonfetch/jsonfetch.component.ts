import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-jsonfetch',
  templateUrl: './jsonfetch.component.html',
  styleUrls: ['./jsonfetch.component.css']
})
export class JsonfetchComponent implements OnInit {

   title = 'image-gallery';
   data:any = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    const url ='https://jsonplaceholder.typicode.com/users'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
}
}
