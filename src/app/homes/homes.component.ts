import { Component, OnInit } from '@angular/core';
import { Hebergement } from 'src/app/_models/hebergement';
import { HomeService } from "src/services/home.service";

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit {

  public homes: Hebergement[];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.home().subscribe(
      homes => this.homes = homes
    );
  }

}
