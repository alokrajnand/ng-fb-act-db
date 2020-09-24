import { Component, EventEmitter, OnInit, Output, Input } from "@angular/core";
import { AuthService } from 'src/app/_services/auth.service';


@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  //Input the the screen size from the default component
  @Input() deviceXs: boolean;
  @Input() deviceMd: boolean;
  @Input() deviceSm: boolean;
  @Input() deviceLg: boolean;
  @Input() deviceXl: boolean;

  constructor(public _AuthService: AuthService) {}

  ngOnInit(): void {}
  
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }
}
