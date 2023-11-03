import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = [
    {
      name: 'HELLA Radar Simulation Tool Set',
      description:
        'Building a dynamic radar simulation tool set which have a web interface and it collects and process big data to the simulation tool "Cassendra". My part is in development the tool to collect and process big data and streaming the big data to a Kubernetes cluster which I mange.',
      imageUrl: 'assets/images/project1.png',
      githubLink: 'https://github.com/user/project1',
    },
    {
      name: 'ConnectX: Cloud Full-Stack Social Media Project',
      description:
        'Developed a React frontend, NodeJS RESTful API backend, MongoDB. Deployed on AWS using EKS, used Actions as a CI/CD tool, Terraform as a IaC tool.',
      imageUrl: 'assets/images/project2.png',
      githubLink: 'https://github.com/user/project2',
    },
    {
      name: 'MarketX: Cloud Full-Stack E-commerce Project',
      description:
        'Developed an Angular frontend, Django RESTful API backend, PostgreSQL DB. Deployed on GCP using GKE, used Actions as a CI/CD tool.',
      imageUrl: 'assets/images/project3.png',
      githubLink: 'https://github.com/user/project3',
    },
    {
      name: 'Complete DevOps Project 2: Terraform Multi-Environment Infrastructure Project',
      description:
        'Used Terraform to create EC2, networking, RDS instances, and Elasticache. Separate environments (Dev and Prod), Lambda function to send an email.',
      imageUrl: 'assets/images/project4.png',
      githubLink: 'https://github.com/user/project4',
    },
    {
      name: 'Complete DevOps Project 1: Infrastructure Pipeline for Node.js Application',
      description:
        'Deployed a dockerized Node.js application using Jenkins, Slack to send an email. Used Terraform, Ansible to make bastion-host configuration, exposed it via ALB.',
      imageUrl: 'assets/images/project5.png',
      githubLink: 'https://github.com/user/project5',
    },
    {
      name: 'BashDB: Bash Script CLI-Based Database Management System',
      description:
        'Created DBMS for data storage, manipulation and retrieval, accepts SQL. It also handles database/table management, primary key constraints.',
      imageUrl: 'assets/images/project6.png',
      githubLink: 'https://github.com/user/project6',
    },
  ];
}
