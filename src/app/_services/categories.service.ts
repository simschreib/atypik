import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Type } from 'src/app/_models/type';
import { VariablesGlobales } from '../variablesGlobales';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: HttpClient,
    private variablesGlobales : VariablesGlobales,
  ) { }


  categories(): Observable<Type[]> {
    return this.http.get<Type[]>(this.variablesGlobales.config.apiUrl + "/type/allTypes");
  }

}
