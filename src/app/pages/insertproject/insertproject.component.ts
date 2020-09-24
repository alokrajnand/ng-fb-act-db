import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/_services/project.service';
import { ProjectModel } from 'src/app/_models/project.model';

@Component({
  selector: 'app-insertproject',
  templateUrl: './insertproject.component.html',
  styleUrls: ['./insertproject.component.scss']
})
export class InsertprojectComponent implements OnInit {

// Global Variable
signInForm: FormGroup;
project : ProjectModel = new ProjectModel();
insertProjectForm: FormGroup;

  constructor(
  private _FormBuilder: FormBuilder,
  public _ProjectService: ProjectService
  ) {}

 ngOnInit(): void {

/*** Form Validation starts Here */

    this.insertProjectForm = this._FormBuilder.group({
      project_id: [this.project.project_id,Validators.required,],
      project_name: [this.project.project_name, Validators.required],
      project_location: [this.project.project_location, Validators.required],
      project_description: [this.project.project_description, Validators.required],
      project_status: [this.project.project_status, Validators.required],
      project_start_d: [this.project.project_start_d, Validators.required],
      project_end_d: [this.project.project_end_d],
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

onSubmit() {
  console.log(this.project_id.value, this.project_name.value );
}


  CreateRecord() {
    let record = {};
    record[this.project.project_id] = this.project_id.value;
    record[this.project.project_name] = this.project_name.value;
    record[this.project.project_location] = this.project_location.value;
    record[this.project.project_description] = this.project_description.value;
    record[this.project.project_status] = this.project_status.value;
    record[this.project.project_start_d] = this.project_name.value;
    record[this.project.project_end_d] = this.project_name.value;
    this._ProjectService.create_Project(record).then(resp => {
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }

}
