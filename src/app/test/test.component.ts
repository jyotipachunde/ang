import { Component, OnInit } from '@angular/core';
//import { Ipost } from '../terface/post';
import {mobileProducts } from '../const/mobiles';
import {movieArray } from '../const/movies';
import { postsArr } from '../const/posts';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  mobileProducts=mobileProducts;
  movieArray=movieArray
  postsArr=postsArr;


  constructor() { }

  ngOnInit(): void {
    console.log(this.mobileProducts);
  }

}
