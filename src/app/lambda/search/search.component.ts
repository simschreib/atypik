import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { Hebergement } from 'src/app/_models/hebergement';
import { HomeService } from 'src/app/_services';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  homes: Hebergement[];
  minDate: Date;
  maxDate: Date;
  dates;
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
  hebergements = [];
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
    private homeService: HomeService,
    private title: Title,
    private meta : Meta,
  ) {
    this.title.setTitle('Atypique House - Logement Insolite - Recherche');
    this.meta.updateTag(
      { name: 'description', content: 'Page de recherche de logement  Atypik House - Location de logements atypique et insolite en France' }
    );
    this.homeService.home().subscribe(homes => this.homes = homes);
    this.search = new FormGroup({
      category : new FormControl(),
      start: new FormControl(),
      end: new FormControl(),
      localisation : new FormControl(),
      peopleNumber : new FormControl(),
    });
    this.appendItems(0, this.sum);

    const year = new Date().getFullYear();
    const day = new Date().getDate();
    const month = new Date().getMonth();
    console.log(day)
    this.minDate = new Date(year, month, day + 1);
    this.maxDate = new Date(year + 1, month, day +  1);
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

  onDateChange(e){
    console.log(e);
  }
  ngOnInit(): void {
  }

}
