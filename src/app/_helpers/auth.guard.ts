import { Injectable, Inject, PLATFORM_ID  } from '@angular/core';
import { Router, CanActivate, CanLoad, ActivatedRoute ,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../_services';
import { VariablesGlobales } from '../variablesGlobales';
import { delay } from 'rxjs/internal/operators';
import { Observable, pipe } from 'rxjs';
import { filter } from 'rxjs/operators';
import { map, take } from 'rxjs/operators'
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  previousUrl: string;
  currentUser: any;
  try_count: number = 0;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private variablesGlobales : VariablesGlobales,
    private authenticationService: AuthenticationService,
    @Inject(PLATFORM_ID) private platformId: Object

  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      return this.authenticationService.currentUserObs().pipe( take(1), map(res => {
        // console.log(res != null);
        console.log(this.platformId);

        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
          if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
            if(currentUser.role === 'OWNER'){
              this.router.navigate(['landlord']);
              return false;
            }
            else if(currentUser.role === 'ADMIN'){
              console.log("admin")
              this.router.navigate(['admin']);
              return false;
            }
            else if(currentUser.role === 'GUEST'){
              this.router.navigate(['user']);
              return false;
            }
            else{
              this.router.navigate(['/']);
              return false;
            }
            return false;
          }
          else{
            return true;
          }
        }
        else{
          this.router.navigate(['login']);
          return false;
        }

      })) 

  }
}
