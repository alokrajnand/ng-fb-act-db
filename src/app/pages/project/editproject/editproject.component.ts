import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProjectModel } from 'src/app/_models/project.model';
import { ProjectService } from 'src/app/_services/project.service';

interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.scss']
})
export class EditprojectComponent implements OnInit {

  
project : ProjectModel = new ProjectModel();
insertProjectForm: FormGroup;
selectedValue: string;

  constructor(
  private _Router: Router,
  public dialog: MatDialog,
  private _FormBuilder: FormBuilder,
  public _ProjectService: ProjectService,
  @Inject(MAT_DIALOG_DATA) public data: any,
  
  ) {
    console.log(data);
  }

foods: Food[] = [
    {value: 'Running', viewValue: 'Running'},
    {value: 'Pipe Line', viewValue: 'Pipe Line'},
    {value: 'Closed', viewValue: 'Closed'}
  ];


 ngOnInit(): void {

/*** Form Validation starts Here */

    this.insertProjectForm = this._FormBuilder.group({
      project_id: [{ value: this.data.project_id, disabled:true},Validators.required,],
      project_name: [this.data.project_name, Validators.required],
      project_location: [this.data.project_location, Validators.required],
      project_description: [this.data.project_description, Validators.required],
      project_status: [this.data.project_status, Validators.required],
      project_start_d: [this.data.project_start_d, Validators.required],
      project_end_d: [this.data.project_end_d],
    });
  }
  // this is for the vialidation and showing error massage
  get project_id(): any {
    return this.insertProjectForm.get("project_id");
  }
  get project_name(): any {
    return this.insertProjectForm.get("project_name");
  }
  get project_location(): any {
    return this.insertProjectForm.get("project_location");
  }
  get project_description(): any {
    return this.insertProjectForm.get("project_description");
  }

  get project_status(): any {
    return this.insertProjectForm.get("project_status");
  }
  get project_start_d(): any {
    return this.insertProjectForm.get("project_start_d");
  }

  get project_end_d(): any {
    return this.insertProjectForm.get("project_end_d");
  }


/*** Form Validation Ends Here */

onSubmit1() {
  console.log(this.project_id.value, this.project_name.value,
  this.project_location.value, this.project_description.value ,
  this.project_status.value, this.project_start_d.value, this.project_end_d.value,  );
}


  onSubmit()  {
    let record = {};
    record['project_id'] = this.project_id.value;
    record['project_name'] = this.project_name.value;
    record['project_location'] = this.project_location.value;
    record['project_description'] = this.project_description.value;
    record['project_status'] = this.project_status.value;
    record['project_start_d'] = this.project_start_d.value;
    record['project_end_d'] = this.project_end_d.value;
    this._ProjectService.update_Project(this.data.project_uid,record).then(resp => {
      console.log('resp');
      this.dialog.closeAll();
    })
      .catch(error => {
        console.log(error);
      });
  }

}
