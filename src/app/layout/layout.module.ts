import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./layout.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from "@angular/router";
/****************************************
 * Component Import
 * **************************************/
import { HeaderComponent } from "../pages/shared/header/header.component";
import { FooterComponent } from "../pages/shared/footer/footer.component";
import { SidebarComponent } from "../pages/shared/sidebar/sidebar.component";
import { SignupComponent } from "../pages/signup/signup.component";
import { HomeComponent } from "../pages/home/home.component";
import { ProjectdashboardComponent } from '../pages/project/projectdashboard/projectdashboard.component';
import { InsertprojectComponent } from '../pages/project/insertproject/insertproject.component';
import { LinkdashboardComponent } from '../pages/link/linkdashboard/linkdashboard.component';
import { EditprojectComponent } from '../pages/project/editproject/editproject.component';
import { EditlinkComponent } from '../pages/link/editlink/editlink.component';
import { InserlinkComponent } from '../pages/link/inserlink/inserlink.component';
import { VendordashboardComponent } from '../pages/vendor/vendordashboard/vendordashboard.component';
import { InservendorComponent } from '../pages/vendor/inservendor/inservendor.component';
import { EditvendorComponent } from '../pages/vendor/editvendor/editvendor.component';
import { ProjectdetailComponent } from '../pages/project/projectdetail/projectdetail.component';
import { LinkdetailComponent } from '../pages/link/linkdetail/linkdetail.component';
import { VendordetailComponent } from '../pages/vendor/vendordetail/vendordetail.component';

/****************************************
 * Progress Bar
 * **************************************/

 // for HttpClient import:
import { LoadingBarHttpClientModule } from "@ngx-loading-bar/http-client";
// for Router import:
import { LoadingBarRouterModule } from "@ngx-loading-bar/router";
// for Core import:
import { LoadingBarModule } from "@ngx-loading-bar/core";

/****************************************
 * Angular Material Component Import
 * **************************************/
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatPaginatorModule } from "@angular/material/paginator";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { MatSelectModule } from "@angular/material/select";
import { MatTabsModule } from "@angular/material/tabs";
import { MatBadgeModule } from "@angular/material/badge";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatListModule } from "@angular/material/list";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatMenuModule } from "@angular/material/menu";
import { SigninComponent } from '../pages/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerifyemailComponent } from '../pages/verifyemail/verifyemail.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ForgetpasswordComponent } from '../pages/forgetpassword/forgetpassword.component';
import {MatTableModule} from '@angular/material/table';



import { GoogleMapsModule } from "@angular/google-maps";
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CompanyProfileComponent } from "../pages/company-profile/company-profile.component";
import { ClientComponent } from "../pages/client/client.component";
import { ContactUsComponent } from "../pages/contact-us/contact-us.component";
import { PartnerComponent } from "../pages/partner/partner.component";
import { ProductComponent } from "../pages/product/product.component";
import { ServicesComponent } from "../pages/services/services.component";





@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    ServicesComponent,
    DashboardComponent,
    CompanyProfileComponent,
    ClientComponent,
    ContactUsComponent,
    PartnerComponent,
    ProductComponent,
    VerifyemailComponent,
    ForgetpasswordComponent,
    ProjectdashboardComponent,
    InsertprojectComponent,
    LinkdashboardComponent,
    EditprojectComponent,
    EditlinkComponent, 
    InserlinkComponent, 
    VendordashboardComponent, 
    InservendorComponent, 
    EditvendorComponent,
    ProjectdetailComponent,
    LinkdetailComponent,
    VendordetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    /*** MAterial style component */
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatSelectModule,
    MatTabsModule,
    MatBadgeModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatListModule,
    MatDialogModule,
    ScrollingModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatMenuModule,
    MatTableModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    /**Flex layout */
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    //**progress Bar */
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    LoadingBarModule,

    GoogleMapsModule,
  ],
})
export class LayoutModule {}
