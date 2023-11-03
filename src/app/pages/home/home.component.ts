// home.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor() { }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset;
      const yOffset = -50
      window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }
  }
}
