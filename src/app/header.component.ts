import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HeaderComponent {
  title = 'header';
}
