import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../_services/auth.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public _AuthService: AuthService) { }

  ngOnInit(): void {
  }

}
