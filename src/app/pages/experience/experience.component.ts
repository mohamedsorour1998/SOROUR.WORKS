import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Junior DevOps Engineer',
      company: 'SEITech Solutions',
      location: 'Cairo, Egypt',
      period: '09/2023 – present',
      employmentType: 'Full-time',
      details: [
        'ADAS Platform Application Development: Worked in an agile team on the development of Advanced Driver-Assistance Systems (ADAS) platform applications, utilizing C/C++, Python, Docker, Jenkins, AWS, and other relevant technologies.',
        'DevOps and CI/CD: Developed and maintained continuous integration and continuous delivery (CI/CD) pipelines especially on Gitlab CI and implemented build automation procedures to enable continuous delivery of autonomous driving features.',
      ],
    },
    {
      role: 'DevOps/Release Engineer',
      company: 'Unilever',
      location: 'Cairo, Egypt',
      period: '07/2023 – 09/2023',
      employmentType: 'Full-time',
      details: [
        "Managing Unilever's MENA applications CI/CD pipeline on Azure and GCP.",
        'Deploying web/mobile applications to the production and test environments.',
        'Support for Java/ Java EE and android applications.',
        'Troubleshooting and continual support on daily basis.',
      ],
    },
  ];
}
