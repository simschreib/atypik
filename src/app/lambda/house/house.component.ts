import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  hebergement;
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

  constructor(
    private route: ActivatedRoute,
  )
  {
    this.search = new FormGroup({

      start: new FormControl(),
      end: new FormControl(),
      peopleNumber : new FormControl(),

    });
    // this.route.queryParams.subscribe(params => {
    //   this.hebergement = params['hebergement'];
    // });
   this.hebergement = this.route.snapshot.paramMap.get('id');

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

  ngOnInit() {

  }
}
