import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
  animateChild,
  keyframes,
  group
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('tab', [
        transition(':enter', [
            style({ transform: 'translateX(200px)', opacity: 0 }), // initial
            animate(
                '0.2s cubic-bezier(0.04, 0.93, 0.46, 1.04)',
                style({ transform: 'translateX(0px)', opacity: 1 })
            ) ,
        ]),
    ]),
  ]
})
export class AppComponent {
  title = 'HireDrone';
  tab   = 1;

  setTab(num: number) {
    this.tab = num;
  }

  isSelected(num: number) {
    return this.tab === num;
  }
}
