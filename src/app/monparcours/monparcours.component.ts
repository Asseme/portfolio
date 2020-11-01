import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monparcours',
  templateUrl: './monparcours.component.html',
  styleUrls: ['./monparcours.component.scss']
})
export class MonparcoursComponent implements OnInit {

  parcoursValue:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(value){
    this.parcoursValue = value;
  }

}
