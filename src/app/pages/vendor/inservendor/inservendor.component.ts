import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VendorModel } from 'src/app/_models/vendor.model';
import { VendorService } from 'src/app/_services/vendor.service';

@Component({
  selector: 'app-inservendor',
  templateUrl: './inservendor.component.html',
  styleUrls: ['./inservendor.component.scss']
})
export class InservendorComponent implements OnInit {


vendor : VendorModel = new VendorModel();
insertVendorForm: FormGroup;
selectedValue: string;

  constructor(
  private _FormBuilder: FormBuilder,
  public _VendorService: VendorService
  ) {}



 ngOnInit(): void {


/*** Form Validation starts Here */

    this.insertVendorForm = this._FormBuilder.group({
      vendor_id: [this.vendor.vendor_id,Validators.required,],
      vendor_name: [this.vendor.vendor_name, Validators.required],
      vendor_city: [this.vendor.vendor_city, Validators.required],
      vendor_state: [this.vendor.vendor_state, Validators.required],
      vendor_pincode: [this.vendor.vendor_pincode, Validators.required],
      vendor_country: [this.vendor.vendor_country, Validators.required],
    });
  }
  // this is for the vialidation and showing error massage
  get vendor_id(): any {
    return this.insertVendorForm.get("vendor_id");
  }
  get vendor_name(): any {
    return this.insertVendorForm.get("vendor_name");
  }
  get vendor_city(): any {
    return this.insertVendorForm.get("vendor_city");
  }
  get vendor_state(): any {
    return this.insertVendorForm.get("vendor_state");
  }

  get vendor_pincode(): any {
    return this.insertVendorForm.get("vendor_pincode");
  }
  get vendor_country(): any {
    return this.insertVendorForm.get("vendor_country");
  }



/*** Form Validation Ends Here */

onSubmit1() {
  console.log(this.vendor_id.value, this.vendor_name.value,
  this.vendor_city.value, this.vendor_state.value ,
  this.vendor_pincode.value, this.vendor_country.value );
}



  onSubmit()  {
    let record = {
      "vendor_id" : this.vendor_id.value,
      "vendor_name": this.vendor_name.value,
      "Address": {
        "vendor_city":this.vendor_city.value,
        "vendor_state":this.vendor_state.value,
        "vendor_pincode":this.vendor_pincode.value,
        "vendor_country":this.vendor_country.value,
      }
    };

    this._VendorService.create_vendor(record).then(resp => {
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }

}
