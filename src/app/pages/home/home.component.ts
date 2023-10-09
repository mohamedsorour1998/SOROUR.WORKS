// home.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor() { }

  scrollToProjects() {
    const projectsElement = document.getElementById('projects');
    projectsElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
