import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  sum = 4;
  throttle = 10;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';
  modalOpen = false;
  item_per_page = 4;
  search: FormGroup;
  categories = [
    {value: '0', viewValue: 'Cabane dans les arbres'},
    {value: '1', viewValue: 'Tipi'},
    {value: '2', viewValue: 'Igloo'}
  ];
  features = [
    {value: '0', viewValue: 'feature - 1'},
    {value: '1', viewValue: 'feature - 2'},
    {value: '2', viewValue: 'feature - 3'}
  ]
  data_hebergements = ['1','2','3','4','1','2','3','4','1','2','3','4'];
  hebergements = []
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
  constructor() {
    this.search = new FormGroup({
      category : new FormControl(),
      start: new FormControl(),
      end: new FormControl(),
      localisation : new FormControl(),
      peopleNumber : new FormControl(),
    });
    this.appendItems(0, this.sum);

  }
  checkThisNbPeople(){
    var form = this.search.value
    if(form.peopleNumber > 20){
      this.search.patchValue({peopleNumber: 20});
    }
    else if(form.peopleNumber < 0){
      this.search.patchValue({peopleNumber: 0});
    }
  }

  addItems(startIndex, endIndex, _method) {
    if(this.sum <= this.data_hebergements.length){
      for (let i = startIndex; i < endIndex; ++i) {
        this.hebergements[_method](this.data_hebergements[i]);
      }
    }
  }

  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'push');
  }

  prependItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'unshift');
  }

  onScrollDown () {
    // add another 20 items
    const start = this.sum;
    this.sum += this.item_per_page;
    this.appendItems(start, this.sum);

    this.direction = 'down'
  }

  onUp() {
    const start = this.sum;
    this.sum += this.item_per_page;
    this.prependItems(start, this.sum);

    this.direction = 'up';
  }
  ngOnInit(): void {
  }

}
