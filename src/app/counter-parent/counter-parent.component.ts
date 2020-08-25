import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-counter-parent',
  templateUrl: './counter-parent.component.html',
  styleUrls: ['./counter-parent.component.css']
})
export class CounterParentComponent implements OnInit {
@ViewChild(CounterComponent) counting:CounterComponent;
increase(){
  this.counting.increasebyone();
}
decrease(){
  this.counting.decreasebyone();
}
  constructor() { }

  ngOnInit(): void {
  }

}
