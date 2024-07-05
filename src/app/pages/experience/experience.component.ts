import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'DevOps Engineer',
      company: 'SEITech Solutions',
      location: 'Cairo, Egypt',
      period: '09/2023 – Present',
      employmentType: 'Full-time',
      details: [
        'DevOps Practices: Led the setup of full DevOps practices, increasing deployment speed by 40% and reducing failures by 25%.',
        'CI/CD Pipelines: Built and managed CI/CD pipelines with GitLab CI, cutting deployment time by 30% and enabling faster feature delivery.',
        'Monitoring and Observability: Implemented and maintained monitoring systems using Prometheus and Grafana, enhancing performance metrics and system visibility, which contributed to achieving system uptime of 99.9%.',
        'Kubernetes Management: Managed Kubernetes clusters, automating application scaling and deployment to optimize resource utilization and system reliability.',
        'ADAS Application Development: Contributed to the development of Advanced Driver-Assistance Systems using technologies such as C++, Python, Docker, Jenkins, and AWS, significantly improving application performance and efficiency.',
      ],
      logo: 'assets/logos/seitech.jpg',
    },
    {
      role: 'DevOps/Release Engineer',
      company: 'Unilever',
      location: 'Cairo, Egypt',
      period: '07/2023 – 09/2023',
      employmentType: 'Full-time',
      details: [
        'SLI/SLO : Worked with product owners to enhance application reliability by 20%.',
        'CI/CD Management: Managed CI/CD pipelines on Azure and GCP, cutting build times by 50% and improving deployment reliability.',
        'Support & Deployment: Improved deployment processes, reducing errors by 35%, and provided support for Java, Kafka, and Android apps, boosting system stability.',
      ],
      logo: 'assets/logos/unilever.png',
    },
  ];
}
