import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Caracteristique } from 'src/app/_models/caracteristique';
import { VariablesGlobales } from '../variablesGlobales';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CaracteristiquesService {

  constructor(
    private http: HttpClient,
    private variablesGlobales : VariablesGlobales,
  ) { }


  caracteristiques(): Observable<Caracteristique[]> {
    return this.http.get<Caracteristique[]>(this.variablesGlobales.config.apiUrl + "/caracteristiques");
  }

}
