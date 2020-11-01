import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../_services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      //if (route.data.roles && route.data.roles.indexOf(decode(currentUser.token).role) === -1) {

      if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
        if(currentUser.role === 'OWNER'){
          this.router.navigate(['/landlord']);
          return false;
        }

        else if(currentUser.role === 'ADMIN'){
          this.router.navigate(['/admin']);
          return false;
        }

        else if(currentUser.role === 'GUEST' && route.data.roles.indexOf("USER") === -1){
          this.router.navigate(['/user']);
          return false;
        }
        else if(currentUser.role === 'GUEST' && route.data.roles.indexOf("USER") != -1 ){
          return true;
        }
        else{
          this.router.navigate(['/']);
          return false;
        }
      }

      return true;
    }
    else if( route.data.roles.indexOf("USER") === -1) {
      // not logged in so redirect to login page with the return url
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    }

    else{
      return true;
    }

  }
}
