import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset;
      const yOffset = -50
      window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }
  }
}
