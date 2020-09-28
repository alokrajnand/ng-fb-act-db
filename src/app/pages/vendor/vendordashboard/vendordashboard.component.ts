import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { VendorModel } from 'src/app/_models/vendor.model';
import { ProjectService } from 'src/app/_services/project.service';
import { VendorService } from 'src/app/_services/vendor.service';
import { EditvendorComponent } from '../editvendor/editvendor.component';
import { InservendorComponent } from '../inservendor/inservendor.component';

@Component({
  selector: 'app-vendordashboard',
  templateUrl: './vendordashboard.component.html',
  styleUrls: ['./vendordashboard.component.scss']
})
export class VendordashboardComponent implements OnInit {

 
  vendor_data: any;


  displayedColumns: string[] = ['vendor_id', 'vendor_name', 'vendor_city', 'vendor_state', 'actions'];
  dataSource: MatTableDataSource<VendorModel>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( 
    private _AngularFirestore : AngularFirestore,
    private _VendortService : VendorService,
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

          vendor_uid :  pi.vendor_uid,
          vendor_id : pi.vendor_id,
          vendor_name : pi.vendor_name,
          vendor_city : pi.vendor_city,
          vendor_state : pi.vendor_state,
          vendor_pincode : pi.vendor_pincode,
          vendor_country : pi.vendor_country,         
        }
        
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }




  ngOnInit(): void  {
    this._VendortService.read_vendor().subscribe(data => {
      this.vendor_data = data.map(e => {
        return  {
          vendor_uid :  e.payload.doc.id,
          vendor_id : e.payload.doc.data()['vendor_id'],
          vendor_name : e.payload.doc.data()['vendor_name'],
          Address : e.payload.doc.data()['Address'],

        };
      })
      this.dataSource = new MatTableDataSource(this.vendor_data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.vendor_data);

    });
  }




  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  RemoveRecord(rowID) {
    this._VendortService.delete_vendor(rowID);
  }



}




/** open material dialoge for the project insert */





