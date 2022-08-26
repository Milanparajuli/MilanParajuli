import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebarMenus: Array<any> = new Array<any>(
    {
      name:'facebook',
      icon: 'facebook',
      url: 'https://www.facebook.com/milanparajuli09/',
    },
    // {
    //   name:'instagram',
    //   url:'/admin/contact-us'
    // },
    // {
    //   name: 'About',
    //   icon: 'info',
    //   url: '/admin/about-us',
    // },
    // {
    //   name: 'Teachers',
    //   icon: 'person_outline',
    //   url: '/admin/teachers',
    // },
    // {
    //   name: 'Courses',
    //   icon: 'library_books',
    //   url: '/admin/courses',
    // },
    // {
    //   name: 'menu',
    //   icon: 'menu-app',
    //   url: '/admin/navbar',
    // },
    // {
    //   name: 'Testimonials',
    //   icon: 'comment',
    //   url: '/admin/testimonials',
    // },
    // {
    //   name: 'Footer About Us',
    //   icon: 'share',
    //   url: '/admin/footeraboutus',
    // },
    // {
    //   name: 'Inbox',
    //   icon: 'mail',
    //   url: '/admin/email/list-email',
    // },
    // {
    //   name: 'Subscriber',
    //   icon: 'mail',
    //   url: '/admin/email/email-subscriber',
    // },
    // {
    //   name: 'Contact Us',
    //   icon: 'contact_support',
    //   url: '',
    // },
    // {
    //   name: 'Settings',
    //   icon: 'settings',
    //   url: '',
    // }
  );

  constructor() { }

  ngOnInit(): void {
  }

}
