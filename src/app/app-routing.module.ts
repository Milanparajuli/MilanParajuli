import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateComponent } from './clientside/certificate/certificate.component';
import { FirstComponent } from './clientside/first/first.component';
import { HomeComponent } from './clientside/home/home.component';
import { MyselfComponent } from './clientside/myself/myself.component';
import { ResumeComponent } from './clientside/resume/resume.component';
// import { FooterComponent } from './common/component/footer/footer.component';
// import { NavComponent } from './common/component/nav/nav.component';

const routes: Routes = [
  {
    path:'',
    component:FirstComponent
  },
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'resume',
    component:ResumeComponent,
  },
  {
    path:'certificate',
    component:CertificateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
