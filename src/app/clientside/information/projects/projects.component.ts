import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      img: '../../../../assets/images/asd.jpg',
      title: 'E-commerce',
      url: 'https://parajulimilan.com.np',
    },
    // {
    //   img: '../../../../assets/images/milan.jpg',
    //   title: 'Helloj dsjknc Demo',
    //   discription: 'sngjonsfjk snfjo fksboj nkirorn',
    // },
    {
      img: '../../../../assets/images/asd.jpg',
      title: 'Attendance Management System',
      url:
        'ams',
    },
    {
      img: '../../../../assets/images/asd.jpg',
      title: 'CMS',
      url: 'http://78.46.130.215/#/home',
    },
    {
      img: '../../../../assets/images/asd.jpg',
      title: 'Task Monitoring',
      url: 'https://milanparajuli.com.np',
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
