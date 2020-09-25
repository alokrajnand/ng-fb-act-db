import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor(
    private _HttpClient: HttpClient,
    private _AngularFirestore : AngularFirestore
  ) { }

create_link(record) {
    return this._AngularFirestore.collection('links').add(record);
  }

read_link() {
    return this._AngularFirestore.collection('links').snapshotChanges();
  }

update_link(recordID,record){
    return this._AngularFirestore.doc('links/' + recordID).update(record);
  }

delete_link(record_id) {
    this._AngularFirestore.doc('projects/' + record_id).delete();
  }

}
