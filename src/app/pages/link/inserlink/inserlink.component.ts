import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LinkModel } from 'src/app/_models/link.model';
import { ProjectModel } from 'src/app/_models/project.model';
import { LinkService } from 'src/app/_services/link.service';
import { ProjectService } from 'src/app/_services/project.service';
import { VendorService } from 'src/app/_services/vendor.service';


interface Assigento {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-inserlink',
  templateUrl: './inserlink.component.html',
  styleUrls: ['./inserlink.component.scss']
})
export class InserlinkComponent implements OnInit {

 
// Global Variable
signInForm: FormGroup;
link : LinkModel = new LinkModel();
insertLinkForm: FormGroup;
selectedValue: string;
project_data : any = '';
vendor_data : any = '';
  
  
  constructor(
  private _FormBuilder: FormBuilder,
  private _LinkService: LinkService,
  private _ProjectService : ProjectService,
  private _VendorService : VendorService,
  public dialog: MatDialog,
  ) {}

assignedto: Assigento[] = [
    {value: 'Self', viewValue: 'Self'},
    {value: 'Vendor', viewValue: 'Vendor'}
  ];


 ngOnInit(): void {
/*** Form Validation starts Here */
    this.insertLinkForm = this._FormBuilder.group({
      project_id: [this.link.project_id,Validators.required,],
      link_id: [this.link.link_id, Validators.required],
      vendor_id: [this.link.vendor_id, Validators.required],
      link_assigned_to: [this.link.link_assigned_to, Validators.required],
      link_start_point: [this.link.link_start_point, Validators.required],
      link_end_point: [this.link.link_end_point, Validators.required],
      link_desctiprion: [this.link.link_desctiprion, Validators.required],
      Link_start_date: [this.link.Link_start_date, Validators.required],
      Link_complete_date: [this.link.Link_complete_date, Validators.required],
      link_vendor_length: [this.link.link_vendor_length, Validators.required],
      link_offical_length: [this.link.link_offical_length, Validators.required],
      link_official_billing_start_d : [this.link.link_official_billing_start_d, Validators.required],
      link_vendor_billing_start_d : [this.link.link_vendor_billing_start_d, Validators.required],
      link_comment:[this.link.link_comment, Validators.required],
    });
  
   /// to get Vendor ID  from the the Vendor List

    this._VendorService.read_vendor().subscribe(data => {
      this.vendor_data = data.map(e => {
        return  {
          vendor_uid :  e.payload.doc.id,
          vendor_id : e.payload.doc.data()['vendor_id'],
          vendor_name : e.payload.doc.data()['vendor_name'],
        };
      })
      console.log(this.vendor_data);

    });
  
 /// to get project id from the the project collection


    this._ProjectService.read_project().subscribe(data => {
      this.project_data = data.map(e => {
        return  {
          project_uid: e.payload.doc.id,
          project_id: e.payload.doc.data()['project_id'],
          project_name: e.payload.doc.data()['project_name'],
        };
      })
      console.log(this.project_data);

    });

  
  }
  // this is for the vialidation and showing error massage
  get project_id(): any {
    return this.insertLinkForm.get("project_id");
  }
  get link_id(): any {
    return this.insertLinkForm.get("link_id");
  }
  get vendor_id(): any {
    return this.insertLinkForm.get("vendor_id");
  }
  get link_assigned_to(): any {
    return this.insertLinkForm.get("link_assigned_to");
  }
  get link_start_point(): any {
    return this.insertLinkForm.get("link_start_point");
  }

  get link_end_point(): any {
    return this.insertLinkForm.get("link_end_point");
  }

  get link_desctiprion(): any {
    return this.insertLinkForm.get("link_desctiprion");
  }
  get Link_start_date(): any {
    return this.insertLinkForm.get("Link_start_date");
  }
  get Link_complete_date(): any {
    return this.insertLinkForm.get("Link_complete_date");
  }

  get link_vendor_length(): any {
    return this.insertLinkForm.get("link_vendor_length");
  }

  get link_offical_length(): any {
    return this.insertLinkForm.get("link_offical_length");
  }
  get link_official_billing_start_d(): any {
    return this.insertLinkForm.get("link_official_billing_start_d");
  }
  get link_vendor_billing_start_d(): any {
    return this.insertLinkForm.get("link_vendor_billing_start_d");
  }

  get link_comment(): any {
    return this.insertLinkForm.get("link_comment");
  }

/*** Form Validation Ends Here */

onSubmit1() {
  console.log(this.project_id.value, this.link_id.value,
  this.link_assigned_to.value, this.link_start_point.value ,
  this.link_end_point.value );
}


  onSubmit()  {
    let record = {};
    record['project_id'] = this.project_id.value;
    record['link_id'] = this.link_id.value;
    record['vendor_id'] = this.link_id.value;
    record['link_assigned_to'] = this.link_assigned_to.value;
    record['link_start_point'] = this.link_start_point.value;
    record['link_end_point'] = this.link_end_point.value;
    record['link_desctiprion'] = this.link_desctiprion.value;
    record['Link_start_date'] = this.Link_start_date.value;
    record['Link_complete_date'] = this.Link_complete_date.value;
    record['link_vendor_length'] = this.link_vendor_length.value;
    record['link_offical_length'] = this.link_offical_length.value;
    record['link_official_billing_start_d'] = this.link_official_billing_start_d.value;
    record['link_vendor_billing_start_d'] = this.link_vendor_billing_start_d.value;
    record['link_comment'] = this.link_comment.value;

    this._LinkService.create_link(record).then(resp => {
      console.log(resp);
      this.dialog.closeAll();
      
    })
      .catch(error => {
        console.log(error);
      });
  }

}
