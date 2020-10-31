import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Home } from 'src/models/home';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public urlHome = "http://localhost:8080/main"

  constructor(private http: HttpClient) { }


  home(): Observable<Home[]> {
    return this.http.get<Home[]>(this.urlHome + "/homes");
  }

}
