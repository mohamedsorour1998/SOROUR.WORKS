import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Project 1',
      description: 'This is a description of Project 1.',
      imageUrl: 'assets/images/project1.png',
      githubLink: 'https://github.com/user/project1',
    },
    {
      name: 'Project 2',
      description: 'This is a description of Project 2.',
      imageUrl: 'assets/images/project2.png',
      githubLink: 'https://github.com/user/project2',
    },
    {
      name: 'Project 2',
      description: 'This is a description of Project 2.',
      imageUrl: 'assets/images/project2.png',
      githubLink: 'https://github.com/user/project2',
    },
    {
      name: 'Project 2',
      description: 'This is a description of Project 2.',
      imageUrl: 'assets/images/project2.png',
      githubLink: 'https://github.com/user/project2',
    },
  ];
}
