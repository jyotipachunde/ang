import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-inputd',
  templateUrl: './inputd.component.html',
  styleUrls: ['./inputd.component.css']
})
export class InputdComponent implements OnInit {
  postarr: any[] = [];
  BASE_URL:string=environment.BASE_URL;
  apiurl:string=`${this.BASE_URL}/posts`;

  constructor(
    private _httpClient:HttpClient
  ) { }

  ngOnInit(): void {

    this._httpClient.get<any[]>(this.apiurl).subscribe({
      next:data=>{
        console.log(data);
        this.postarr=data ;
      },
      error:err=>{
        console.log(err);
      }
    });
  }

}
