import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './clientside/home/home.component';
import { ResumeComponent } from './clientside/resume/resume.component';
// import { FooterComponent } from './common/component/footer/footer.component';
// import { NavComponent } from './common/component/nav/nav.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'resume',
    component:ResumeComponent,
  }
  // {
  //   path:'nav',
  //   component:NavComponent,
  // },
  // {
  //   path:'foot',
  //   component:FooterComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
