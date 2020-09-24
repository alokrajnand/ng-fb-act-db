import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ForgetpasswordComponent } from './pages/forgetpassword/forgetpassword.component';
import { HomeComponent } from "./pages/home/home.component";
import { ProjectdashboardComponent } from './pages/projectdashboard/projectdashboard.component';
import { SigninComponent } from "./pages/signin/signin.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { VerifyemailComponent } from './pages/verifyemail/verifyemail.component';
import { AuthGuard } from './_authguard/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
      { path: "pdashboard", component: ProjectdashboardComponent, canActivate: [AuthGuard] },
      { path: "signup", component: SignupComponent },
      { path: "signin", component: SigninComponent },
      { path: 'verifyemailaddress', component: VerifyemailComponent },
      { path: 'forgot-password', component: ForgetpasswordComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
