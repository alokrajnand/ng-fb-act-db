import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { GoogleMap, MapInfoWindow, MapMarker } from "@angular/google-maps";
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/_services/auth.service';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/_models/user.model';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
  public _AngularFirestore: AngularFirestore, 
  private _AuthService : AuthService,
  public _AngularFireAuth: AngularFireAuth,

  private _UserService : UserService) { }

  ngOnInit(): void {
  }

}
