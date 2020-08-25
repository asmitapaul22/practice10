import { Component, OnInit,ViewChild,ElementRef,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements AfterViewInit{
@ViewChild('name') elename:ElementRef;
@ViewChild('state') elestate:ElementRef;
ngAfterViewInit(){
  this.elename.nativeElement.style.backgroundColor="blue";
  this.elename.nativeElement.style.color="yellow";
  this.elestate.nativeElement.style.backgroundColor="red";
  this.elestate.nativeElement.style.color="white";


}
  constructor() { }

  ngOnInit(): void {
  }

}
