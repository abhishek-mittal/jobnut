import { Routes } from '@angular/router';
// resume editor routes
import { HomeComponent } from './resume/home/home.component';
import { ResumeBuilderComponent } from './resume/resume-builder/resume-builder.component';
import { PersonalDetailsComponent } from './resume/resume-builder/personal-details/personal-details.component';
import { EducationComponent } from './resume/resume-builder/education/education.component';
import { SkillsComponent } from './resume/resume-builder/skills/skills.component';
import { ExperienceComponent } from './resume/resume-builder/experience/experience.component';
import { HobbiesComponent } from './resume/resume-builder/hobbies/hobbies.component';
import { InterestsComponent } from './resume/resume-builder/interests/interests.component';
import { CertificatesComponent } from './resume/resume-builder/certificates/certificates.component';
import { LanguagesComponent } from './resume/resume-builder/languages/languages.component';
import { ResumePreviewComponent } from './resume/resume-preview/resume-preview.component';
import { ResumePreview1Component } from './resume/resume-preview-1/resume-preview-1.component';
import { ResumePreview2Component } from './resume/resume-preview-2/resume-preview-2.component';
import { ResumePreview3Component } from './resume/resume-preview-3/resume-preview-3.component';
import { LoginComponent } from './_shared/components/login/login.component';
import { CallbackComponent } from './_shared/components/misc/callback/callback.component';
import { UserViewPostDetailsComponent } from './dashboards/user-dashboard/features/user-view-post/user-view-post-details/user-view-post-details.component';
import { UserViewAppliedPostComponent } from './dashboards/user-dashboard/features/user-view-applied-post/user-view-applied-post.component';
import { UserViewAppliedPostDetailsComponent } from './dashboards/user-dashboard/features/user-view-applied-post/user-view-applied-post-details/user-view-applied-post-details.component';

import { SignupHomeComponent } from './_shared/components/signup/signup-home/signup-home.component';
import { SignupComponent } from './_shared/components/signup/signup.component';
import { HrComponent } from './_shared/components/signup/hr/hr.component';
import { ApplicantComponent } from './_shared/components/signup/applicant/applicant.component';
import { NotificationComponent } from './_shared/components/misc/notification/notification.component';
import { ForgetpasswordComponent } from './_shared/components/forgetpassword/forgetpassword.component';
import { LoggedInGuard } from './core/guards/logged-in.guard';



export const routerConfig: Routes = [
  // basic routes
  // login routes during
  { path: 'login', component: LoginComponent },

  // hr routes
  { path: 'applicant', canActivate: [LoggedInGuard && localStorage['isApplicant']], redirectTo: 'user-view-post' },
  // {
  //   path: 'jobs-posted/:id',
  //   component: HrPostdetailsComponent
  // },
  // {
  //   path: 'user-view-post',
  //   loadChildren: 'app/user-view-post/user-view-post.module#UserDashboardModule',
  // },
  {
    path: 'applied-job',
    component: UserViewAppliedPostComponent,
  },
  {
    path: 'applied-job/:user-post.id',
    component: UserViewAppliedPostDetailsComponent,
  },


  {
    path: 'signin-home',
    component: SignupHomeComponent
  },

  {
    path: 'signin',
    redirectTo: 'signin-home'
  },

  // signup routes during
  {
    path: 'signin',
    component: SignupComponent,
    children: [
      {
        path: 'signin-hr',
        component: HrComponent,
        // canActivate: [LoggedInGuard]
      },
      {
        path: 'signin-applicant',
        component: ApplicantComponent,
        // canActivate: [LoggedInGuard]
      }
    ]
  },
  // signup routes during


  { path: 'notif', component: NotificationComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'forgetPassword', component: ForgetpasswordComponent },

  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // remume builder routes

  // {path:'resume-builder',component:IndexPageComponent},
  { path: 'resume-home', component: HomeComponent },
  {
    path: 'resumeDetails/:id', component: ResumeBuilderComponent, children: [
      { path: '', redirectTo: 'personalDetails', pathMatch: 'full' },
      { path: 'personalDetails', component: PersonalDetailsComponent },
      { path: 'education', component: EducationComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'experiences', component: ExperienceComponent },
      { path: 'hobbies', component: HobbiesComponent },
      { path: 'interests', component: InterestsComponent },
      { path: 'certificates', component: CertificatesComponent },
      { path: 'languages', component: LanguagesComponent }
    ]
  },
  { path: '1', component: ResumePreviewComponent },
  { path: '2', component: ResumePreview1Component },
  { path: '3', component: ResumePreview2Component },
  { path: '4', component: ResumePreview3Component },

];
