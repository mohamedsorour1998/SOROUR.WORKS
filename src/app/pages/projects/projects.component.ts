import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Radar Simulation Tool Set',
      description:
        'Building a dynamic radar simulation tool set which have a web interface and it collects and process big data to the simulation tool "Cassendra". My part is in development the tool to collect and process big data and streaming the big data to a Kubernetes cluster which I mange.',
      imageUrl: 'assets/projects/car_logo.jpg',
      githubLink: 'https://www.hella.com/en/',
    },
    {
      name: 'ConnectX: Cloud Full-Stack Social Media Project',
      description:
        'Developed a React frontend, NodeJS RESTful API backend, MongoDB. Deployed on AWS using EKS, used Actions as a CI/CD tool, Terraform as a IaC tool.',
      imageUrl: 'assets/projects/connectx.png',
      githubLink: 'https://github.com/mohamedsorour1998/ConnectX',
    },
    {
      name: 'MarketX: Cloud Full-Stack E-commerce Project',
      description:
        'Developed an Angular frontend, Django RESTful API backend, PostgreSQL DB. Deployed on GCP using GKE, used Actions as a CI/CD tool.',
      imageUrl: 'assets/projects/marketx.png',
      githubLink: 'https://github.com/mohamedsorour1998/MarketX',
    },
    {
      name: 'Complete DevOps Project 2: Terraform Multi-Environment Infrastructure Project',
      description:
        'Used Terraform to create EC2, networking, RDS instances, and Elasticache. Separate environments (Dev and Prod), Lambda function to send an email.',
      imageUrl: 'assets/projects/dp2.jpeg',
      githubLink:
        'https://github.com/mohamedsorour1998/Complete-DevOps-Project-2',
    },
    {
      name: 'Complete DevOps Project 1: Infrastructure Pipeline for Node.js Application',
      description:
        'Deployed a dockerize Node.js application using Jenkins, Used Terraform, Ansible to make bastion-host configuration, exposed by ALB, Slack to send email.',
      imageUrl: 'assets/projects/dp1.png',
      githubLink:
        'https://github.com/mohamedsorour1998/Complete-DevOps-Project-1',
    },
    {
      name: 'BashDB: Bash Script CLI-Based Database Management System',
      description:
        'Created DBMS for data storage, manipulation and retrieval, accepts SQL. It also handles database/table management, primary key constraints.',
      imageUrl: 'assets/projects/bd.png',
      githubLink:
        'https://github.com/mohamedsorour1998/BashDB-A-CLI-Based-Database-Management-System',
    },
  ];
}
