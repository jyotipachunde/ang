import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  skillarr = [
    { name: "angular",content:"A platform for building mobile and desktop web applications." },
    { name: "react",content:"A JavaScript library for building user interfaces." },
    { name: "vue" ,content:"The Progressive JavaScript Framework." },
    { name: "svelte",content:"Cybernetically enhanced web apps." },
    { name: "ember",content:"A framework for ambitious web developers." },
    { name: "backbone",content:"Give your JS App some Backbone with Models, Views, Collections, and Events." }
  ];
  selectedskill = "react";

  recipiesarr = [
    { name: "wadapav",content:"very delicious" },
    { name: "pavbhaji",content:"fevriate dish we can make it by using potatoes" },
    { name: "dosa" ,content:"fevriate dish we can make it by using rise,potatoes sabji" },
    { name: "idli",content:"fevriate dish we can make it by using rise" },
    { name: "vada",content:"fevriate dish we can make it by using black grams" },
    { name: "upma",content:"fevriate dish we can make it by using sooji" }
  ];
  selectedrecipy = "wadapav";

  constructor() { }

  ngOnInit(): void {
  }

}
