import { Component, OnDestroy, OnInit } from "@angular/core";
import { MediaObserver, MediaChange } from "@angular/flex-layout";
import { Subscription } from "rxjs";
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit, OnDestroy {
  sideBarOpen: boolean;
  sideBar: Subscription;
  medisub: Subscription;
  mode = "";
  constructor(
    public _MediaObserver: MediaObserver,
    public _UserService: UserService,
    public _AuthService: AuthService
  ) {}

  ngOnInit(): void {
    this.sideBar = this._MediaObserver.media$.subscribe(
      (result: MediaChange) => {
        console.log(result.mqAlias);
        if ((this.sideBarOpen = result.mqAlias === "xs")) {
          this.sideBarOpen = false;
          this.mode = "over";
        } else if ((this.sideBarOpen = result.mqAlias === "sm")) {
          this.sideBarOpen = false;
          this.mode = "over";
        } else if ((this.sideBarOpen = result.mqAlias === "md")) {
          this.sideBarOpen = true;
          this.mode = "side";
        } else if ((this.sideBarOpen = result.mqAlias === "lg")) {
          this.sideBarOpen = true;
          this.mode = "side";
        } else {
          this.sideBarOpen = true;
          this.mode = "side";
        }
      }
    );
  }

  ngOnDestroy() {
    this.medisub.unsubscribe();
  }

  sideBarToggler(): void {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
