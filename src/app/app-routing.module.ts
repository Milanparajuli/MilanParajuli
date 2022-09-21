import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateComponent } from './clientside/certificate/certificate.component';
import { CvComponent } from './clientside/cv/cv.component';
import { FirstComponent } from './clientside/first/first.component';
import { HomeComponent } from './clientside/home/home.component';
import { ContactInfoComponent } from './clientside/information/contact-info/contact-info.component';
import { InfoCertificateComponent } from './clientside/information/info-certificate/info-certificate.component';
import { ProjectsComponent } from './clientside/information/projects/projects.component';
import { MyselfComponent } from './clientside/myself/myself.component';
import { ResumeComponent } from './clientside/resume/resume.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { FooterComponent } from './common/component/footer/footer.component';
// import { NavComponent } from './common/component/nav/nav.component';

const routes: Routes = [
  {
    path: '',
    component: FirstComponent,
    children: [
      {
        path:'',
        component:HomeComponent
      },
      {
        path: 'resume',
        component: ResumeComponent,
      },
      {
        path: 'certificate',
        component: InfoCertificateComponent,
      },
      {
        path: 'contact-us',
        component: ContactInfoComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'project',
        component: ProjectsComponent,
      },
    ],
  },
  {
    path: '**', component: PageNotFoundComponent //wild card route
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
