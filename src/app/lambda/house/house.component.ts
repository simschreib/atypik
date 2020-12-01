import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';
import { CategoriesService, HomeService } from 'src/app/_services';
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
  hebergement;
  house: Hebergement;
  search: FormGroup;
  maxPeople = 2;
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
    "Hauteur : 20 metre",
    "Wifi",
    "Toilette Sèche",
    "Electricité"
  ]

  activities = [
    'Excursion Equestre',
    'Balade en vélo',
  ]

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(
    private route: ActivatedRoute, private homeService: HomeService, private categoriesService: CategoriesService
  )
  {
    this.hebergement = this.route.snapshot.paramMap.get('id');
    this.homeService.oneHome(this.hebergement).subscribe(home => this.house = home);

    this.search = new FormGroup({

      start: new FormControl(),
      end: new FormControl(),
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
  onDateChange(e){

  }
  ngOnInit() {
    window.scroll(0, 0);
  }
}
