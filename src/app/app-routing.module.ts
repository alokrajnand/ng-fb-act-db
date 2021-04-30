import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { ClientComponent } from "./pages/client/client.component";
import { CompanyProfileComponent } from "./pages/company-profile/company-profile.component";
import { ContactUsComponent } from "./pages/contact-us/contact-us.component";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ForgetpasswordComponent } from './pages/forgetpassword/forgetpassword.component';
import { HomeComponent } from "./pages/home/home.component";
import { LinkdashboardComponent } from './pages/link/linkdashboard/linkdashboard.component';
import { LinkdetailComponent } from './pages/link/linkdetail/linkdetail.component';
import { PartnerComponent } from "./pages/partner/partner.component";
import { ProductComponent } from "./pages/product/product.component";
import { ProjectdashboardComponent } from './pages/project/projectdashboard/projectdashboard.component';
import { ProjectdetailComponent } from './pages/project/projectdetail/projectdetail.component';
import { ServicesComponent } from "./pages/services/services.component";
import { SigninComponent } from "./pages/signin/signin.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { VendordashboardComponent } from './pages/vendor/vendordashboard/vendordashboard.component';
import { VendordetailComponent } from './pages/vendor/vendordetail/vendordetail.component';
import { VerifyemailComponent } from './pages/verifyemail/verifyemail.component';
import { AuthGuard } from './_authguard/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "about", component: CompanyProfileComponent },
      { path: "products", component: ProductComponent },
      { path: "client", component: ClientComponent },
      { path: "services", component: ServicesComponent },
      { path: "partner", component: PartnerComponent },
      { path: "contact", component: ContactUsComponent },
      { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
      { path: "pdashboard", component: ProjectdashboardComponent, canActivate: [AuthGuard] },
      { path: "project/:name", component: ProjectdetailComponent, canActivate: [AuthGuard] },
      { path: "ldashboard", component: LinkdashboardComponent, canActivate: [AuthGuard] },
      { path: "link/:name", component: LinkdetailComponent, canActivate: [AuthGuard] },
      { path: "vdashboard", component: VendordashboardComponent, canActivate: [AuthGuard] },
      { path: "vendor/:name", component: VendordetailComponent, canActivate: [AuthGuard] },
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
