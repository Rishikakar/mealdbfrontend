import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealserviceService } from '../mealservice.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-searchmealbyfirstletter',
  templateUrl: './searchmealbyfirstletter.component.html',
  styleUrls: ['./searchmealbyfirstletter.component.css']
})
export class SearchmealbyfirstletterComponent implements OnInit {
  searchElement;
  
  MealName;
  MealId ;
  MealUrl ;
  MealDescription;
  meal=[];
  constructor(private http: MealserviceService,private activatedRoute: ActivatedRoute,private route: Router) { 
    this.searchElement = this.activatedRoute.snapshot.params.id;
    console.log(this.searchElement)
    this.http.searchings(this.searchElement).subscribe((data)=>{console.log(data);
      for(var i=0;i<data.length;i++)
      {
        this.meal.push([data[i].mealDescription,data[i].mealId, data[i].mealName,
          data[i].mealUrl ]);
      }
      console.log(this.meal)
    },(error)=>{},()=>{});
    
   }
  ngOnInit(): void {
  }

}