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
      logo: 'assets/logos/red-hat-certified-system-administrator-rhcsa.png',
      link: 'https://www.credly.com/badges/5d623bf8-92c4-46dd-bd44-e0b823e0ccc7/public_url',
    },
    {
      title: 'GCP ACE: GCP Associate Cloud Engineer',
      logo: 'assets/logos/associate-cloud-engineer-certification.png',
      link: 'https://www.credly.com/badges/ed0d658c-d6c4-4ddb-875e-7921ecfcfa3d/public_url',
    },
    {
      title: 'CKA: Certified Kubernetes Administrator',
      logo: 'assets/logos/cka-certified-kubernetes-administrator.png',
      link: 'https://www.credly.com/badges/4286d3d5-4a4a-426f-9db4-436d875d511b/public_url',
    },
    {
      title: 'AWS CCP: AWS Certified Cloud Practitioner',
      logo: 'assets/logos/aws-certified-cloud-practitioner.png',
      link: 'https://www.credly.com/badges/933fa480-bc9e-461f-b4e3-c748a541aa00/public_url',
    },
  ];
}
