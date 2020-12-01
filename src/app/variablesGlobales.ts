import { Injectable } from '@angular/core';


@Injectable()
export class VariablesGlobales {
  constructor(
  ) { }
  config = {
    apiUrl : 'http://localhost:8080', 
    user : JSON.parse(localStorage.getItem('currentUser')),
  };
}
