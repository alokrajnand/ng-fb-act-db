import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { VendorModel } from 'src/app/_models/vendor.model';
import { ProjectService } from 'src/app/_services/project.service';
import { EditvendorComponent } from '../editvendor/editvendor.component';
import { InservendorComponent } from '../inservendor/inservendor.component';

@Component({
  selector: 'app-vendordashboard',
  templateUrl: './vendordashboard.component.html',
  styleUrls: ['./vendordashboard.component.scss']
})
export class VendordashboardComponent implements OnInit {

 
  project_data: any;


  displayedColumns: string[] = ['project_id', 'project_name', 'project_location', 'project_status', 'actions'];
  dataSource: MatTableDataSource<VendorModel>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( 
    private _AngularFirestore : AngularFirestore,
    private _ProjectService : ProjectService,
    public dialog: MatDialog
  ) { 
  }


 openInsertprojectDialog(): void {
    const dialogRef = this.dialog.open(InservendorComponent, {
      width: '80%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
      
    });
  }

 openEditprojectDialog(pi): void {
    const dialogRef = this.dialog.open(EditvendorComponent, {
      width: '80%',
      closeOnNavigation: true,
      data: {
          project_uid: pi.project_uid,
          project_id: pi.project_id,
          project_name: pi.project_name,
          project_location: pi.project_location,
          project_description:pi.project_description,
          project_status: pi.project_status,
          project_start_d: pi.project_start_d.toDate(),
          project_end_d: pi.project_end_d.toDate(),       
        }
        
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }




  ngOnInit(): void  {
    this._ProjectService.read_project().subscribe(data => {
      this.project_data = data.map(e => {
        return {
          project_uid: e.payload.doc.id,
          project_id: e.payload.doc.data()['project_id'],
          project_name: e.payload.doc.data()['project_name'],
          project_location: e.payload.doc.data()['project_location'],
          project_description: e.payload.doc.data()['project_description'],
          project_status: e.payload.doc.data()['project_status'],
          project_start_d: e.payload.doc.data()['project_start_d'],
          project_end_d: e.payload.doc.data()['project_end_d'],
        };
      })
      this.dataSource = new MatTableDataSource(this.project_data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.project_data);

    });
  }




  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  RemoveRecord(rowID) {
    this._ProjectService.delete_Project(rowID);
  }



}




/** open material dialoge for the project insert */





