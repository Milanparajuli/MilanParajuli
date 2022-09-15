import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
})
export class CertificateComponent implements OnInit {
  sideBarOpen: boolean = true;
  constructor() {}

  ngOnInit(): void {}
  sideBarToggle() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
