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
      icon: 'fab fa-facebook',
      url: 'https://www.facebook.com/milanparajuli09',
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      url: 'https://www.instagram.com/milanparajuli9/',
    },
    {
      name: 'Github',
      icon: 'fab fa-github',
      url: 'https://github.com/Milanparajuli',
    },
    {
      name: 'Linkedin',
      icon: 'fab fa-linkedin',
      url: 'https://www.linkedin.com/in/milanparajuli/',
    },
  );
  constructor() { }

  ngOnInit(): void {
  }

}
