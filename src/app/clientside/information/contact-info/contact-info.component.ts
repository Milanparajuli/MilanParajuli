import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
  contacts:Array<any> = new Array<any>(
    {
      name: 'Facebook',
      icon: 'facebook',
      url: 'https://www.facebook.com/milanparajuli09',
    },
    {
      name: 'Instagram',
      icon: 'instagram',
      url: 'https://www.instagram.com/milanparajuli9/',
    },
    {
      name: 'Github',
      icon: 'github',
      url: 'https://github.com/Milanparajuli',
    },
    {
      name: 'Linkedin',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/milan-parajuli-0379a320a/',
    },
  );
  constructor() { }

  ngOnInit(): void {
  }

}
