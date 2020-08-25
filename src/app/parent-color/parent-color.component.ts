import { Component, OnInit, ViewChild } from '@angular/core';
import { viewClassName } from '@angular/compiler';
import {ChangecolorDirective} from '../changecolor.directive';
import { from } from 'rxjs';
@Component({
  selector: 'app-parent-color',
  templateUrl: './parent-color.component.html',
  styleUrls: ['./parent-color.component.css']
})
export class ParentColorComponent implements OnInit {
@ViewChild(ChangecolorDirective) changing:ChangecolorDirective;
changecolor(color:string){
  this.changing.change(color)
}
  constructor() { }

  ngOnInit(): void {
  } 

}
