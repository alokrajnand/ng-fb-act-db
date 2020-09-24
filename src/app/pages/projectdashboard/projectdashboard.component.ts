import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectService } from 'src/app/_services/project.service';
import { AngularFirestore , AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ProjectModel } from 'src/app/_models/project.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { InsertprojectComponent } from '../insertproject/insertproject.component';
import { EditprojectComponent } from '../editproject/editproject.component';

export interface UserData {
  id: string;
  user: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const USER: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-projectdashboard',
  templateUrl: './projectdashboard.component.html',
  styleUrls: ['./projectdashboard.component.scss']
})
export class ProjectdashboardComponent implements OnInit {
title = 'Firestore CRUD Operations Students App';

  students: any;
  studentName: string;
  studentAge: number;
  studentAddress: string;

  displayedColumns: string[] = ['id', 'user', 'progress', 'color' , 'actions'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( 
    private _AngularFirestore : AngularFirestore,
    private _ProjectService : ProjectService,
    public dialog: MatDialog
  ) { 



    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }




 openInsertprojectDialog(): void {
    const dialogRef = this.dialog.open(InsertprojectComponent, {
      width: '80%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

 openEditprojectDialog(): void {
    const dialogRef = this.dialog.open(EditprojectComponent, {
      width: '80%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }




  ngOnInit(): void  {
    this._ProjectService.read_project().subscribe(data => {

      this.students = data.map(e => {
        return {
          userName: e.payload.doc.data()['project_id'],
          Age: e.payload.doc.data()['project_name'],
        };
      })
      console.log(this.students);

    });

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }




  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const user = USER[Math.round(Math.random() * (USER.length - 1))] + ' ' +
      USER[Math.round(Math.random() * (USER.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    user: user,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };


/** open material dialoge for the project insert */



}
