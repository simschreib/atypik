import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hebergement } from 'src/app/_models/hebergement';
import { VariablesGlobales } from '../variablesGlobales';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public urlHome = "http://localhost:8080"

  constructor(
    private http: HttpClient,
    private variablesGlobales : VariablesGlobales,
  ) { }


  home(): Observable<Hebergement[]> {
    return this.http.get<Hebergement[]>(this.variablesGlobales.config.apiUrl + "/home/allHomes");
  }

}
