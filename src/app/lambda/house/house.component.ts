import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';
import { CategoriesService, HomeService, CookieParamService} from 'src/app/_services';
import { Hebergement } from 'src/app/_models/hebergement';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  minDate: Date;
  maxDate: Date;
  dates;
  fakeResa = [
    {
      begin : new Date(2020, 11, 20),
      end : new Date(2020, 11, 25),
    },
    {
      begin : new Date(2020, 11, 10),
      end : new Date(2020, 11, 16),
    },
  ];
  myDateFilter = (d: Date | null): boolean => {
    const date = d;
    // Prevent Saturday and Sunday from being selected.
    return this.checkDate(date);
  }
  hebergement;
  house: Hebergement;
  search: FormGroup;
  maxPeople;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 3,
    loop: true,
    touch: true,
    velocity: 0.2
  }
  carouselItems = [
    'hebergement-insolite.jpg',
    'paris.jpg',
    'spa.jpg',
  ];

  carouselConfigComment: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 2, lg: 2, all: 0 },
    load: 5,
    loop: true,
    touch: true,
    velocity: 0.2
  }
  carouselComments = [
    { author:"J. Doe", content : 'topissime  hebergement génial', stars : 5 },
    { author:"J. Doe", content : 'topissime  hebergement génial',  stars : 3 },
    { author:"J. Doe", content : 'topissime  hebergement génial', stars : 4 }
  ];

  infos = [
    'Draps Non Fourni',
    'Petit déjeuné inclus',
    'Arrivée : 15h',
    'Départ : 12h',
  ]

  caracteristiques = [
    "Wifi",
    "Electricité"
  ]

  activities = [
    'Excursion Equestre',
    'Balade en vélo',
  ]

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private categoriesService: CategoriesService,
    private cookieParamService : CookieParamService,
  )
  {
    this.hebergement = this.route.snapshot.paramMap.get('id');
    this.homeService.oneHome(this.hebergement).subscribe(data => {
      this.house = data;
      this.maxPeople = data.capacity
      this.lat = data.latitude;
      this.lng = data.longitude;
    });

    this.search = new FormGroup({
      date: new FormControl(),
      peopleNumber : new FormControl(),
    });
    // this.route.queryParams.subscribe(params => {
    //   this.hebergement = params['hebergement'];
    // });


    const year = new Date().getFullYear();
    const day = new Date().getDay();
    const month = new Date().getMonth();
    this.minDate = new Date(year, month, day + 1);
    this.maxDate = new Date(year + 1, month, day);

    var cookie = this.cookieParamService.currentCookieParamValue;
    console.log(cookie);

    if(cookie.begin && cookie.end){
      this.search.patchValue({
        date : {
          begin : new Date(cookie.begin),
          end : new Date(cookie.end),
        }
      });
    }
    if(cookie.peopleNumber && cookie.end){
      this.search.patchValue({
        peopleNumber : cookie.peopleNumber
      });
    }
    console.log(this.search.value);


  }
  checkThisNbPeople(){
    var form = this.search.value
    if(form.peopleNumber > this.maxPeople){
      this.search.patchValue({peopleNumber: this.maxPeople });
    }
    else if(form.peopleNumber < 0){
      this.search.patchValue({peopleNumber: 0});
    }
  }
  checkDate(date){
    console.log(date);
    for(let i = 0; i < this.fakeResa.length; i++){
      if(date.getTime() >= this.fakeResa[i].begin.getTime() && date.getTime() < this.fakeResa[i].end.getTime()){
        return false;
      }
    }
    return true;
  }
  ngOnInit() {
    window.scroll(0, 0);
  }
}
