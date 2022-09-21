import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-certificate',
  templateUrl: './info-certificate.component.html',
  styleUrls: ['./info-certificate.component.scss'],
})
export class InfoCertificateComponent implements OnInit {
  certificate = [
    {
      img: '../../../../assets/images/css.png',
      title: 'CSS',
    },
    {
      img: '../../../../assets/images/html.png',
      title: 'HTML',
    },
    {
      img: '../../../../assets/images/javabeg.jpg',
      title: 'java',
    },
    {
      img: '../../../../assets/images/oopinjava.jpg',
      title: 'OOP in Java',
    },
    {
      img: '../../../../assets/images/sjava.png',
      title: 'Java',
    },
    // {
    //   img: '../../../../assets/images/abc.jpg',
    //   title: 'Heldvjonscj ',
    //   discription:
    //     'sngjonsfdvnji vnjdvjk nadjn jkdkavjlnjk snfjo fksboj nkirorn',
    // },
  ];
  constructor() {}

  ngOnInit(): void {}
}
