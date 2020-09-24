import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectModel } from '../_models/project.model';
import {HttpClient} from "@angular/common/http";
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private _HttpClient: HttpClient,
    private _AngularFirestore : AngularFirestore
  ) { }

create_Project(record) {
    return this._AngularFirestore.collection('projects').add(record);
  }

read_project() {
    return this._AngularFirestore.collection('projects').snapshotChanges();
  }

update_Project(recordID,record){
    this._AngularFirestore.doc('projects/' + recordID).update(record);
  }

delete_Project(record_id) {
    this._AngularFirestore.doc('projects/' + record_id).delete();
  }

}
