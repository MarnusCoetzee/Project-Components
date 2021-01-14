import { environment } from './../../../../environments/environment.prod';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, NgModule } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {
  LOGO = environment.LOGO;

  obNavState: { isMobile: boolean } = { isMobile: false };

  arSubs: Subscription[] = [];
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.arSubs.push(
      this.breakpointObserver
        .observe(['(min-width: 764px)'])
        .subscribe((state: BreakpointState) => {
          if (state.matches) {
            this.obNavState.isMobile = false;
          } else {
            this.obNavState.isMobile = true;
          }
        })
    );
  }

  handleLogout() {}
}
