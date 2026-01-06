import { Component, Input, OnInit } from '@angular/core';
import { Imovie } from '../terface/v';

@Component({
  selector: 'app-inputwithmovie',
  templateUrl: './inputwithmovie.component.html',
  styleUrls: ['./inputwithmovie.component.css']
})
export class InputwithmovieComponent implements OnInit {
  @Input() movieList!: Imovie;

  constructor() { }

  ngOnInit(): void {
  }

}
