import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  educationHistory = [
    {
      institution: 'Information Technology Institute (ITI)',
      program: '9-Month Professional Postgraduate Diploma',
      major:
        'Open-Source Technologies Track- Infrastructure & Software Engineering, Minor in IoT',
      project:
        'Graduation Project & Rank: Smart Locker Management System, First on track',
      period: '10/2022 – 07/2023',
      location: 'New Capital, Egypt',
      icon: 'assets/logos/iti.png',
      certLink: 'http://example.com/iti-cert.pdf',
    },
    {
      institution: 'Udacity EGFWD',
      program: 'Cloud Developer Nanodegree Program',
      major:
        'Cloud Developer, Key Contents: Cloud Fundamentals, Full Stack Apps on AWS, Monolith to Microservices at Scale',
      project:
        'Graduation Project: Refactor & Deploy Monolith to Microservices',
      period: '07/2022 – 09/2022',
      location: 'Cairo, Egypt',
      icon: 'assets/logos/udacity.png',
      certLink: 'https://confirm.udacity.com/X4PRKKQE',
    },
    {
      institution: '',
      program: "Bachelor's Degree of Science in Engineering",
      major: '',
      project:
        'Graduation Project: IoT Water Desalination Plant using Python, GPA3.4/4',
      period: '09/2016 – 05/2021',
      location: 'Cairo, Egypt',
      icon: 'assets/logos/computer-science.jpg',
    },
  ];
}
