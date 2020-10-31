import { Component, OnInit } from '@angular/core';
import { Home } from 'src/models/home';
import { HomeService } from "../../_services";
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public homes: Home[];

  search: FormGroup
  categories = [
    {value: '0', viewValue: 'Cabane dans les arbres'},
    {value: '1', viewValue: 'Tipi'},
    {value: '2', viewValue: 'Igloo'}
  ];

  constructor(private homeService: HomeService) {
    this.search = new FormGroup({
      category : new FormControl(),
      start: new FormControl(),
      end: new FormControl(),
      localisation : new FormControl(),
    });
  }

  ngOnInit(): void {
    console.log('coucou')
    this.homeService.home().subscribe(
      homes => this.homes = homes
    );
  }

}
