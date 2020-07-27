import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealserviceService } from '../mealservice.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  currentCountryId;
  countryDescription;
  countryName;
  mealDescription;
  meal = [];
  constructor(private http: MealserviceService, private activatedRoute: ActivatedRoute) {
    this.currentCountryId = this.activatedRoute.snapshot.params.id;
    this.http.getMealsByCountry(this.currentCountryId).subscribe((data) => {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        this.meal.push([data[i].mealName, data[i].mealId, data[i].mealImageUrl])
      }
      console.log(this.meal);
      this.countryName = data[0].countryName; this.countryDescription = data[0].countryDescription }, (error) => { }, () => { });
  }
  ngOnInit(): void {
  }

}