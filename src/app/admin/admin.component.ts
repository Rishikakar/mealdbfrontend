import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MealserviceService } from '../mealservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  msg = "";
  adminform;
  adminformformeals;
  constructor(private service: MealserviceService, private fb: FormBuilder, private route: Router) {
    
      this.adminformformeals = this.fb.group(
        {
          'MealName': this.fb.control(""),
          'MealImageUrl': this.fb.control(""),
          'MealDescription' : this.fb.control(""),
          'SubIngredientOne' : this.fb.control(""),
          'SubIngredientOneUrl' : this.fb.control(""),
          'SubIngredientTwo' : this.fb.control(""),
          'SubIngredientTwoUrl' : this.fb.control(""),
          'SubIngredientThree' : this.fb.control(""),
          'SubIngredientThreeUrl' : this.fb.control(""),
          'SubIngredientFour' : this.fb.control(""),
          'SubIngredientFourUrl' : this.fb.control(""),
          'SubIngredientFive' : this.fb.control(""),
          'SubIngredientFiveUrl' : this.fb.control(""),
          'SubIngredientSix' : this.fb.control(""),
          'SubIngredientSixUrl' : this.fb.control(""),
          'CountrysId' : this.fb.control(""),
          'MainIngredientsId' : this.fb.control("")

        }
    );
  }
 
  uploadingmeal()
  {
    console.log(this.adminformformeals.value);
    var data = this.adminformformeals.value;
    console.log(data)
    this.service.postMeal(data).subscribe((data)=>{console.log(data)},(error)=>{},()=>{});
    //alert("Upadated successfully on db..")

  
  }
  logout()
  {
    window.localStorage.removeItem("user-token"); 
    this.route.navigate(['mealdb']); 
  }


 
 




  ngOnInit(): void {
  }

}
