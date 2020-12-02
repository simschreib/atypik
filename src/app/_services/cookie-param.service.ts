import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VariablesGlobales } from '../variablesGlobales';
import { pipe } from 'rxjs';
import { CookieParam } from '../_models/cookie';
import { CookieService } from 'ngx-cookie';

@Injectable({ providedIn: 'root' })
export class CookieParamService {
  private currentCookieSubject: BehaviorSubject<CookieParam>;
  public currentUser: Observable<CookieParam>;


  constructor(
    private http: HttpClient,
    private variablesGlobales : VariablesGlobales,
    private cookieService: CookieService,
  ) {
    if(this.cookieService.get('param')){
      this.currentCookieSubject = new BehaviorSubject<any>(JSON.parse(this.cookieService.get('param')));
    }
    else{
      this.currentCookieSubject = new BehaviorSubject<any>(undefined);
    }

  }

  public get currentCookieParamValue(): CookieParam {
    return this.currentCookieSubject.value
  }

  public setCookieParam(cookie) {
    this.cookieService.put('param', JSON.stringify(cookie));
    this.currentCookieSubject.next(cookie);
  }

  public removeCookieParam() {
    // remove user from local storage and set current user to null
    this.cookieService.remove('param');
    this.currentCookieSubject.next(null);
  }
}
