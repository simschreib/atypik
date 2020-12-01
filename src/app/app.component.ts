import { Component,  Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import { AuthenticationService } from './_services';
import { User } from './_models';
import { HostListener } from "@angular/core";
import {isPlatformBrowser} from '@angular/common';



@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: User;
  screenWidth;
  static isBrowser = new BehaviorSubject<boolean>(null);

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    AppComponent.isBrowser.next(isPlatformBrowser(platformId));
    this.currentUser = this.authenticationService.currentUserValue;

  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenWidth = window.innerWidth;    
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  ngOnInit() {
  }
}
