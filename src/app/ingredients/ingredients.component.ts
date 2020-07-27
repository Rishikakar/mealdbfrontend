import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealserviceService } from '../mealservice.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  currentIngredientId;
  mainIngredientImageUrl;
  mainIngredientName;
  mainIngredientDescription;
  mealImageUrl;
  mealName;
  meal=[];
  constructor(private http: MealserviceService, private activatedRoute: ActivatedRoute) {
    this.currentIngredientId = this.activatedRoute.snapshot.params.id
    this.http.getMealsByIngredients(this.currentIngredientId).subscribe((data)=>{console.log(data);
    //console.log(data.length);
    for(var i=0;i<data.length;i++)
    {
     
      this.meal.push([ data[i].mealName,
      data[i].mealImageUrl,data[i].mealId]);
    }
    this.mainIngredientImageUrl = data[0].mainIngredientImageUrl,
    this.mainIngredientName = data[0].mainIngredientName,
    this.mainIngredientDescription = data[0].mainIngredientDescription
    },
    (error)=>{},
    ()=>{});
    console.log(this.meal)
   }

  ngOnInit(): void {
  }

}