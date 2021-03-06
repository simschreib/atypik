import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { Hebergement } from 'src/app/_models/hebergement';
import { HomeService, CategoriesService, CaracteristiquesService, CookieParamService } from 'src/app/_services';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  departements = [
    {id : "1" , name :   '01 - Ain'},
    {id : "2" , name :   '02 - Aisne'},
    {id : "3" , name :   '03 - Allier'},
    {id : "4" , name :   '04 - Alpes-de-Haute-Provences'},
    {id : "5" , name :   '05 - Hautes-alpes'},
    {id : "6" , name :   '06 - Alpes-maritimes'},
    {id : "7" , name :   '07 - Ardèche'},
    {id : "8" , name :   '08 - Ardennes'},
    {id : "9" , name :   '09 - Ariège'},
    {id : "10" , name :   '10 - Aube'},
    {id : "11" , name :   '11 - Aude'},
    {id : "12" , name :   '12 - Aveyron'},
    {id : "13" , name :   '13 - Bouches-du-Rhône'},
    {id : "14" , name :   '14 - Calvados'},
    {id : "15" , name :   '15 - Cantal'},
    {id : "16" , name :   '16 - Charente'},
    {id : "17" , name :   '17 - Charente-maritime'},
    {id : "18" , name :   '18 - Cher'},
    {id : "19" , name :   '19 - Corrèze'},
    {id : "201" , name :   '2A - Corse-du-sud'},
    {id : "202" , name :   '2A - Corse-du-Nord'},
    {id : "21" , name :   '21 - Côte-d\'Or'},
    {id : "22" , name :   '22 - Côtes-d\'Armor'},
    {id : "23" , name :   '23 - Creuse'},
    {id : "24" , name :   '24 - Dordogne'},
    {id : "25" , name :   '25 - Doubs'},
    {id : "26" , name :   '26 - Drôme'},
    {id : "27" , name :   '27 - Eure'},
    {id : "28" , name :   '28 - Eure-et-loir'},
    {id : "29" , name :   '29 - Finistère'},
    {id : "30" , name :   '30 - Gard'},
    {id : "31" , name :   '31 - Haute-garonne'},
    {id : "32" , name :   '32 - Gers'},
    {id : "33" , name :   '33 - Gironde'},
    {id : "34" , name :   '34 - Hérault'},
    {id : "35" , name :   '35 - Ille-et-vilaine'},
    {id : "36" , name :   '36 - Indre'},
    {id : "37" , name :   '37 - Indre-et-loire'},
    {id : "38" , name :   '38 - Isère'},
    {id : "39" , name :   '39 - Jura'},
    {id : "40" , name :   '40 - Landes'},
    {id : "41" , name :   '41 - Loir-et-cher'},
    {id : "42" , name :   '42 - Loire'},
    {id : "43" , name :   '43 - Haute-loire'},
    {id : "44" , name :   '44 - Loire-atlantique'},
    {id : "45" , name :   '45 - Loiret'},
    {id : "46" , name :   '46 - Lot'},
    {id : "47" , name :   '47 - Lot-et-garonne'},
    {id : "48" , name :   '48 - Lozère'},
    {id : "49" , name :   '49 - Maine-et-loire'},
    {id : "50" , name :   '50 - Manche'},
    {id : "51" , name :   '51 - Marne'},
    {id : "52" , name :   '52 - Haute-marne'},
    {id : "53" , name :   '53 - Mayenne'},
    {id : "54" , name :   '54 - Meurthe-et-moselle'},
    {id : "55" , name :   '55 - Meuse'},
    {id : "56" , name :   '56 - Morbihan'},
    {id : "57" , name :   '57 - Moselle'},
    {id : "58" , name :   '58 - Nièvre'},
    {id : "59" , name :   '59 - Nord'},
    {id : "60" , name :   '60 - Oise'},
    {id : "61" , name :   '61 - Orne'},
    {id : "62" , name :   '62 - Pas-de-calais'},
    {id : "63" , name :   '63 - Puy-de-dôme'},
    {id : "64" , name :   '64 - Pyrénées-atlantiques'},
    {id : "65" , name :   '65 - Hautes-Pyrénées'},
    {id : "66" , name :   '66 - Pyrénées-orientales'},
    {id : "67" , name :   '67 - Bas-rhin'},
    {id : "68" , name :   '68 - Haut-rhin'},
    {id : "69" , name :   '69 - Rhône'},
    {id : "70" , name :   '70 - Haute-saône'},
    {id : "71" , name :   '71 - Saône-et-loire'},
    {id : "72" , name :   '72 - Sarthe'},
    {id : "73" , name :   '73 - Savoie'},
    {id : "74" , name :   '74 - Haute-savoie'},
    {id : "75" , name :   '75 - Paris'},
    {id : "76" , name :   '76 - Seine-maritime'},
    {id : "77" , name :   '77 - Seine-et-marne'},
    {id : "78" , name :   '78 - Yvelines'},
    {id : "79" , name :   '79 - Deux-sèvres'},
    {id : "80" , name :   '80 - Somme'},
    {id : "81" , name :   '81 - Tarn'},
    {id : "82" , name :   '82 - Tarn-et-Garonne'},
    {id : "83" , name :   '83 - Var'},
    {id : "84" , name :   '84 - Vaucluse'},
    {id : "85" , name :   '85 - Vendée'},
    {id : "86" , name :   '86 - Vienne'},
    {id : "87" , name :   '87 - Haute-vienne'},
    {id : "88" , name :   '88 - Vosges'},
    {id : "89" , name :   '89 - Yonne'},
    {id : "90" , name :   '90 - Territoire de belfort'},
    {id : "91" , name :   '91 - Essonne'},
    {id : "92" , name :   '92 - Hauts-de-seine'},
    {id : "93" , name :   '93 - Seine-Saint-Denis'},
    {id : "94" , name :   '94 - Val-de-marne'},
    {id : "95" , name :   '95 - Val-d\'Oise'},
    {id : "971" , name :   '971 - Guadeloupe'},
    {id : "972", name :   '972 - Martinique'},
    {id : "973", name :   '973 - Guyane'},
    {id : "974", name :   '974 - La réunion'},
    {id : "975", name :   '976 - Mayotte'},
  ];
  homes: Hebergement[];
  homes_displayed = [];
  minDate: Date;
  maxDate: Date;
  dates
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
  sum = 4;
  throttle = 10;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';
  modalOpen = false;
  item_per_page = 4;
  search: FormGroup;
  stars
  categories;
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
    private categoriesService: CategoriesService,
    private caracteristiquesService : CaracteristiquesService,
    private cookieParamService : CookieParamService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private meta : Meta,
  ) {
    this.stars = Array(5).fill(0).map((x,i)=>i+1);

    this.homeService.home().subscribe(homes => {this.homes = homes
    });
    this.title.setTitle('Atypique House - Logement Insolite - Recherche');
    this.meta.updateTag(
      { name: 'description', content: 'Page de recherche de logement  Atypik House - Location de logements atypique et insolite en France' }
    );
    this.search = new FormGroup({
      category : new FormControl(),
      date: new FormControl(),
      feature: new FormControl(),
      localisation : new FormControl(),
      peopleNumber : new FormControl(),
    });
    this.route.queryParams.subscribe(data => {
      if(data.date_begin && data.date_end){
        this.search.patchValue({ date : {
          begin : new Date(data.date_begin),
          end : new Date(data.date_end),
        }})
      }
      if(data.peopleNumber){
        this.search.patchValue({
          peopleNumber : parseInt(data.peopleNumber),
        })
      }
      if(data.category ){
        if(Array.isArray(data.category)) {
          this.search.patchValue({
            category : data.category,
          })
        }
        else{
          this.search.patchValue({
            category : new Array(data.category),
          })
        }
      }
      if(data.localisation ){
        if(Array.isArray(data.localisation)) {
          this.search.patchValue({
            localisation : data.localisation,
          })
        }
        else{
          this.search.patchValue({
            localisation : new Array(data.localisation),
          })
        }
      }
    });

    const year = new Date().getFullYear();
    const day = new Date().getDate();
    const month = new Date().getMonth();
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
    if(this.sum <= this.homes.length){
      for (let i = startIndex; i < endIndex; ++i) {
        this.homes_displayed[_method](this.homes[i]);
      }
    }
    else if(  this.homes_displayed.length < this.homes.length){
      for (let i = 0; i < this.homes.length; ++i) {
        this.homes_displayed[_method](this.homes[i]);
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
  }
  ngOnInit(): void {
    this.homeService.home().subscribe(
      data => {
        var tmp = data;
        if(this.search.value.category){
          tmp= tmp.filter(x => this.search.value.category.includes(x.type.id));
        }
        if(this.search.value.peopleNumber){
          tmp= tmp.filter(x => this.search.value.peopleNumber <= x.capacity);
        }
        if(this.search.value.localisation){
          tmp= tmp.filter(x => this.search.value.localisation.includes(x.postalCode));
        }
        if(this.search.value.date && this.search.value.date.begin && this.search.value.date.end){
          tmp= tmp.filter(x => this.checkResa(this.search.value.date.begin, this.search.value.date.end));
        }
        this.homes = JSON.parse(JSON.stringify(tmp));
        this.appendItems(0, this.sum);
      }
    );
    this.categoriesService.categories().subscribe(
      data => {
        this.categories = data;
      }
    );


  }
  checkResa(begin, end ){
    for(let i = 0; i < this.fakeResa.length; i++){
      if(begin.getTime() >= this.fakeResa[i].begin.getTime() && begin.getTime() < this.fakeResa[i].end.getTime()){
        return false;
      }
      else if(end.getTime() >= this.fakeResa[i].begin.getTime() && end.getTime() < this.fakeResa[i].end.getTime()){
        return false;
      }
    }
    return true;
  }

  log(msg){
    console.log(msg);
  }
  searchHouse(){
    if(!this.search.value.date || !this.search.value.date.begin || !this.search.value.date.end){
      this.search.patchValue({
        date : {
          begin : undefined,
          end : undefined
        }})
      }
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(
        ()=>
        this.router.navigate(['/search'], {
          queryParams: {
            category : this.search.value.category,
            date_begin: this.search.value.date.begin,
            date_end: this.search.value.date.end,
            localisation : this.search.value.localisation,
            peopleNumber : this.search.value.peopleNumber,
          }
        })
      );

    }
    setCookie(){
      var cookie = {
        begin : null,
        end : null,
        peopleNumber : null
      }
      if(this.search.value.peopleNumber){
        cookie.peopleNumber = this.search.value.peopleNumber;
      }
      if(this.search.value.date && this.search.value.date.end && this.search.value.date.begin){
        cookie.begin = this.search.value.date.begin;
        cookie.end = this.search.value.date.end;
      }
      this.cookieParamService.setCookieParam(cookie);
    }
  }
