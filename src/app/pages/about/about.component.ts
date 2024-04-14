import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  aboutText =
    'DevOps Engineer expert in open source development, cloud migration, and container orchestration. Quickly adapts to new technologies, excels in communication, and uses innovation to drive success.';
  skills = [
    'Cloud: AWS, GCP',
    'Docker',
    'Configuration Management: Ansible',
    'IaC: Terraform',
    'SQL: MySQL, PostgreSQL, PL/SQL',
    'Microservices Comms: RESTful API, Kafka',
    'Version Control System: Git',
    'Frontend Frameworks: React, Angular',
    'Agile',
    'Container Orchestration: Kubernetes',
    'CI/CD: Jenkins, GitHub Actions, Azure Pipelines, Gitlab CI',
    'Scripting: Python, Bash, Groovy',
    'Logging and Monitoring: Prometheus, ELK',
    'Programming Languages: C/C++, Java',
    'Backend Frameworks: Express, Django',
    'Communication Skills',
    'Presentation Skills',
  ];
}
