import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './common/component/nav/nav.component';
import { SidebarComponent } from './common/component/sidebar/sidebar.component';
import { FooterComponent } from './common/component/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './clientside/home/home.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MyselfComponent } from './clientside/myself/myself.component';
import { ResumeComponent } from './clientside/resume/resume.component';
import { CvComponent } from './clientside/cv/cv.component';
import { CertificateComponent } from './clientside/certificate/certificate.component';
import { FirstComponent } from './clientside/first/first.component';
import { InfoCertificateComponent } from './clientside/information/info-certificate/info-certificate.component';
import { ContactInfoComponent } from './clientside/information/contact-info/contact-info.component';
import { ProjectsComponent } from './clientside/information/projects/projects.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    MyselfComponent,
    ResumeComponent,
    CvComponent,
    CertificateComponent,
    FirstComponent,
    InfoCertificateComponent,
    ContactInfoComponent,
    ProjectsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
