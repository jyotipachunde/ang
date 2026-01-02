import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabswitch',
  templateUrl: './tabswitch.component.html',
  styleUrls: ['./tabswitch.component.css']
})
export class TabswitchComponent implements OnInit {

  skillarr = [
    { name: "angular",content:"A platform for building mobile and desktop web applications." },
    { name: "react",content:"A JavaScript library for building user interfaces." },
    { name: "vue" ,content:"The Progressive JavaScript Framework." },
    { name: "svelte",content:"Cybernetically enhanced web apps." }
];
  selectedskill = "react";

  recipiesarr = [
    { name: "wadapav",content:"very delicious" },
    { name: "pavbhaji",content:"fevriate dish we can make it by using potatoes" },
    { name: "dosa" ,content:"fevriate dish we can make it by using rise,potatoes sabji" },
    { name: "idli",content:"fevriate dish we can make it by using rise" }
   ];
  selectedrecipy = "wadapav";

  constructor() { }

  ngOnInit(): void {


  }

}
