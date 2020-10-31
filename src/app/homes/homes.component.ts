import { Component, OnInit } from '@angular/core';
import { Home } from 'src/models/home';
import { HomeService } from "src/services/home.service";

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit {

  public homes: Home[];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.home().subscribe(
      homes => this.homes = homes
    );
  }

}
