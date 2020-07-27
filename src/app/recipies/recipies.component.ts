  
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealserviceService } from '../mealservice.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {

  lists = [];
  currentMealId;
  mainIngredientImageUrl;
  mainIngredientName;
  mainIngredientsId;
  mealDescription;
  mealImageUrl;
  mealName;
  subIngredientFive;
  subIngredientFiveUrl;
  subIngredientFour;
  subIngredientFourUrl;
  subIngredientOne;
  subIngredientOneUrl;
  subIngredientSix;
  subIngredientSixUrl;
  subIngredientThree;
  subIngredientThreeUrl;
  subIngredientTwo;
  subIngredientTwoUrl;
  constructor(private http: MealserviceService, private activatedRoute: ActivatedRoute) {
    this.currentMealId = this.activatedRoute.snapshot.params.id
    this.http.getSpecificMeals(this.currentMealId).subscribe(
      (data) => {
        //this.lists.push(data);
        console.log(data[0].mealName);
        this.currentMealId = data[0].currentMealId;
        this.mainIngredientImageUrl = data[0].mainIngredientImageUrl;
        this.mainIngredientName = data[0].mainIngredientName;
        this.mainIngredientsId = data[0].mainIngredientsId;
        this.mealDescription = data[0].mealDescription;
        this.mealImageUrl = data[0].mealImageUrl;
        this.mealName = data[0].mealName;
        this.subIngredientFive = data[0].subIngredientFive;
        this.subIngredientFiveUrl = data[0].subIngredientFiveUrl;
        this.subIngredientFour = data[0].subIngredientFour;
        this.subIngredientFourUrl = data[0].subIngredientFourUrl;
        this.subIngredientOne = data[0].subIngredientOne;
        this.subIngredientOneUrl = data[0].subIngredientOneUrl;
        this.subIngredientSix = data[0].subIngredientSix;
        this.subIngredientSixUrl = data[0].subIngredientSixUrl;
        this.subIngredientThree = data[0].subIngredientThree;
        this.subIngredientThreeUrl = data[0].subIngredientThreeUrl;
        this.subIngredientTwo = data[0].subIngredientTwo;
        this.subIngredientTwoUrl = data[0].subIngredientTwoUrl;
        console.log(this.mealName)
      },
      (err) => { console.log("error", err) },
      () => { }
    );
   
  }


  ngOnInit(): void {
  }

}