import { Component, OnInit } from '@angular/core';
import {  CategoriesService } from "src/app/_services";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  categories;
  constructor(
    private categoriesService: CategoriesService,
  ) { }

  ngOnInit(): void {
    this.categoriesService.categories().subscribe(
      data => {
        this.categories = data;
      }
    );
  }

}
