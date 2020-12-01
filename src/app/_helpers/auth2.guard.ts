import { Injectable,  Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, CanActivate, CanLoad, ActivatedRoute ,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../_services';
import { VariablesGlobales } from '../variablesGlobales';
import { Observable, pipe } from 'rxjs';
import { filter } from 'rxjs/operators';
import { map, take} from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class Auth2Guard implements CanActivate {
  previousUrl: string;
  currentUser: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private variablesGlobales : VariablesGlobales,
    private authenticationService: AuthenticationService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authenticationService.currentUserObs().pipe(take(1), map(res => {
      const currentUser = res;
      if (currentUser) {
        if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
          if(currentUser.role === 'GUEST' && route.data.roles.indexOf("USER") != -1 ){
            return true;
          }
          else{
            if(currentUser.role === 'OWNER'){
              this.router.navigate(['landlord']);
              return false;
            }
            else if(currentUser.role === 'ADMIN'){
              this.router.navigate(['admin']);
              return false;
            }
            return false;
          }
        }
      }
      else{
        return true;
      }

    }))
  }
}
