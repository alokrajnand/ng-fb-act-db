import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutModule } from "./layout/layout.module";
import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";



/// Firebase configration for connection 

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ProjectdetailComponent } from './pages/project/projectdetail/projectdetail.component';
import { LinkdetailComponent } from './pages/link/linkdetail/linkdetail.component';
import { VendordetailComponent } from './pages/vendor/vendordetail/vendordetail.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductComponent } from './pages/product/product.component';
import { CompanyProfileComponent } from './pages/company-profile/company-profile.component';
import { ServicesComponent } from './pages/services/services.component';
import { PartnerComponent } from './pages/partner/partner.component';
import { ClientComponent } from './pages/client/client.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';






@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    LayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
