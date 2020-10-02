import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LinkModel } from 'src/app/_models/link.model';
import { LinkService } from 'src/app/_services/link.service';
import { ProjectService } from 'src/app/_services/project.service';
import { UserService } from 'src/app/_services/user.service';
import { EditlinkComponent } from '../editlink/editlink.component';
import { InserlinkComponent } from '../inserlink/inserlink.component';

@Component({
  selector: 'app-linkdashboard',
  templateUrl: './linkdashboard.component.html',
  styleUrls: ['./linkdashboard.component.scss']
})
export class LinkdashboardComponent implements OnInit {

  link_data: any;
  role : any ;
  user_data : any ='';
  user_email : any ='';


  displayedColumns: string[]; 
  displayedColumns1: string[] = ['link_id', 'project_id','link_start_point', 'link_end_point', 'actions'];
  displayedColumns2: string[] = ['link_id', 'project_id', 'link_start_point', 'link_end_point'];
  dataSource: MatTableDataSource<LinkModel>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( 
    private _AngularFirestore : AngularFirestore,
    private _LinkService : LinkService,
    public dialog: MatDialog,
    private _AngularFireAuth : AngularFireAuth,
    private _UserService : UserService
  ) { 
  }


 openInsertprojectDialog(): void {
    const dialogRef = this.dialog.open(InserlinkComponent, {
      width: '80%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
          
    });
  }

 openEditprojectDialog(pi): void {
    const dialogRef = this.dialog.open(EditlinkComponent, {
      width: '80%',
      closeOnNavigation: true,
      data: {
          link_uid: pi.project_uid,
          project_id: pi.project_id,
          link_id: pi.link_id,
          vendor_id: pi.vendor_id,
          link_start_point: pi.link_start_point,
          link_end_point: pi.link_end_point,
          link_desctiprion: pi.link_desctiprion,
          Link_start_date: pi.Link_start_date,
          Link_complete_date: pi.Link_complete_date,
          link_vendor_length: pi.link_vendor_length,
          link_offical_length: pi.link_offical_length,
          link_official_billing_start_d : pi.link_official_billing_start_d,
          link_vendor_billing_start_d : pi.link_vendor_billing_start_d,
          link_comment:pi.link_comment, 
        }
        
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }



  ngOnInit(): void  {

      this._AngularFireAuth.user.subscribe(res =>{
        this.user_email = res.email 
            this._UserService.getRole(this.user_email).subscribe(data => {
            this.user_data = data.map(e => {      
              this.role =  e.payload.doc.data()['role']
              if (this.role == 'admin'){
                    this.displayedColumns = this.displayedColumns1
                } else{
                  this.displayedColumns = this.displayedColumns2
                }
            })
          });
      })

    ////
    this._LinkService.read_link().subscribe(data => {
      this.link_data = data.map(e => {
        return {
          link_uid: e.payload.doc.id,
          project_id: e.payload.doc.data()['project_id'],
          link_id: e.payload.doc.data()['link_id'],
          vendor_id : e.payload.doc.data()['vendor_id'],
          link_start_point: e.payload.doc.data()['link_start_point'],
          link_end_point: e.payload.doc.data()['link_end_point'],
          link_desctiprion: e.payload.doc.data()['link_desctiprion'],
          Link_start_date: e.payload.doc.data()['Link_start_date'],
          Link_complete_date: e.payload.doc.data()['Link_complete_date'],
          link_vendor_length: e.payload.doc.data()['link_vendor_length'],
          link_offical_length: e.payload.doc.data()['link_offical_length'],
          link_official_billing_start_d : e.payload.doc.data()['link_official_billing_start_d'],
          link_vendor_billing_start_d : e.payload.doc.data()['link_vendor_billing_start_d'],
          link_comment:e.payload.doc.data()['link_comment'],
        };
      })
      this.dataSource = new MatTableDataSource(this.link_data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });
  }




  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  RemoveRecord(rowID) {
    this._LinkService.delete_link(rowID);
  }



}


