import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealserviceService } from '../mealservice.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  searchElement;
  
  MealName;
  MealId ;
  MealUrl ;
  MealDescription;
  meal=[];

  constructor(private http: MealserviceService,private activatedRoute: ActivatedRoute,private route: Router) {
    this.searchElement = this.activatedRoute.snapshot.params.id;
    this.http.searching(this.searchElement).subscribe((data)=>{console.log(data);
      for(var i=0;i<data.length;i++)
      {
        this.meal.push([data[i].mealId, data[i].mealName,data[i].MealDescription,
        data[i].mealUrl]);
      }
    },(error)=>{},()=>{});
    
   }

  ngOnInit(): void {
  }

}
