import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ForgetpasswordComponent } from './pages/forgetpassword/forgetpassword.component';
import { HomeComponent } from "./pages/home/home.component";
import { LinkdashboardComponent } from './pages/link/linkdashboard/linkdashboard.component';
import { ProjectdashboardComponent } from './pages/project/projectdashboard/projectdashboard.component';
import { SigninComponent } from "./pages/signin/signin.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { VendordashboardComponent } from './pages/vendor/vendordashboard/vendordashboard.component';
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
      { path: "ldashboard", component: LinkdashboardComponent, canActivate: [AuthGuard] },
      { path: "vdashboard", component: VendordashboardComponent, canActivate: [AuthGuard] },
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
