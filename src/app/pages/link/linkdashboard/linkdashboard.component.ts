import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LinkModel } from 'src/app/_models/link.model';
import { LinkService } from 'src/app/_services/link.service';
import { EditlinkComponent } from '../editlink/editlink.component';
import { InserlinkComponent } from '../inserlink/inserlink.component';

@Component({
  selector: 'app-linkdashboard',
  templateUrl: './linkdashboard.component.html',
  styleUrls: ['./linkdashboard.component.scss']
})
export class LinkdashboardComponent implements OnInit {

  project_data: any;


  displayedColumns: string[] = ['project_id', 'project_name', 'project_location', 'project_status', 'actions'];
  dataSource: MatTableDataSource<LinkModel>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( 
    private _AngularFirestore : AngularFirestore,
    private _LinkService : LinkService,
    public dialog: MatDialog
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
    this._LinkService.read_link().subscribe(data => {
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
    this._LinkService.delete_link(rowID);
  }



}


