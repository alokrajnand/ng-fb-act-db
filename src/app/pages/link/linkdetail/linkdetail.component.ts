import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { LinkService } from 'src/app/_services/link.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-linkdetail',
  templateUrl: './linkdetail.component.html',
  styleUrls: ['./linkdetail.component.scss']
})
export class LinkdetailComponent implements OnInit {
 link_data: any ='';
 name :String;

  constructor(
    private _AngularFirestore : AngularFirestore,
    private _LinkService : LinkService,
    private _AngularFireAuth : AngularFireAuth,
    private _UserService : UserService,
    private _ActivatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
      this.name = this._ActivatedRoute.snapshot.params.name;
      this._LinkService.read_link_byid(this.name).subscribe(data => {
          this.link_data = data.payload.data(); 
      });
      
  }
  }