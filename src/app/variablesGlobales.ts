import { Injectable } from '@angular/core';


@Injectable()
export class VariablesGlobales {
  constructor(
  ) { }
  config = {
    apiUrl : 'https://api-atypik.herokuapp.com', 
    user : JSON.parse(localStorage.getItem('currentUser')),
  };
}
