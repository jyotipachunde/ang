import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from '../terface/post';
import { Imobile } from '../terface/mobile';
import { Imovie } from '../terface/v';

@Component({
  selector: 'app-testc',
  templateUrl: './testc.component.html',
  styleUrls: ['./testc.component.css']
})
export class TestcComponent implements OnInit {
  @Input() post!:Ipost[];
  @Input() mobileProducts!:Imobile[];
  @Input() movieArray!:Imovie[];

  constructor() { }

  ngOnInit(): void {
  }

  trackById = (index: number): number => {
    return index;
  }

}
