import { Component } from '@angular/core';

@Component({
  selector: 'app-certs',
  templateUrl: './certs.component.html',
  styleUrls: ['./certs.component.css'],
})
export class CertsComponent {
  certifications = [
    {
      title: 'RHCSA: Red Hat Certified System Administrator',
      logo: 'assets/logos/rhcsa.png',
      link: 'https://www.redhat.com/en/services/certification/rhcsa',
    },
    {
      title: 'GCP ACE: GCP Associate Cloud Engineer',
      logo: 'assets/logos/gcp.png',
      link: 'https://cloud.google.com/certification/cloud-engineer',
    },
    {
      title: 'CKA: Certified Kubernetes Administrator',
      logo: 'assets/logos/cka.png',
      link: 'https://www.cncf.io/certification/cka/',
    },
    {
      title: 'AWS CCP: AWS Certified Cloud Practitioner',
      logo: 'assets/logos/aws.png',
      link: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
    },
  ];
}
