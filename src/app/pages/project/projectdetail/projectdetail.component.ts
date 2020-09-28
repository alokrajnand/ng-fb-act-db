import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProjectModel } from 'src/app/_models/project.model';
import { LinkService } from 'src/app/_services/link.service';
import { ProjectService } from 'src/app/_services/project.service';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.scss']
})
export class ProjectdetailComponent implements OnInit {
  project_data: any = '';
  link_data : any;
  name = "";

  constructor(
  private _ProjectService : ProjectService,
  private _ActivatedRoute: ActivatedRoute,
  private _LinkService : LinkService,
  ) { 
  }

  ngOnInit(): void {
      this.name = this._ActivatedRoute.snapshot.params.name;
      console.log(this.name);  
      this._ProjectService.read_project_byid(this.name).subscribe(res => {
          console.log(res.payload.data());
          this.project_data = res.payload.data();

      this._LinkService.read_link_by_pid(this.project_data.project_id).subscribe(data => {
      this.link_data = data.map(e => {
        return  {
          link_uid: e.payload.doc.id,
          project_id: e.payload.doc.data()['project_id'],
          link_id: e.payload.doc.data()['link_id'],
          
        };
      })
      console.log(this.link_data);

    });


  })

    
  }


  

  }
