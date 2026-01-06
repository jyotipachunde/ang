import { Component, Input, OnInit } from '@angular/core';
import { Imobile } from '../terface/mobile';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  @Input() mobile!:Imobile

  constructor() { }

  ngOnInit(): void {
  }

}
