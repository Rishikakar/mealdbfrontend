import { Component, OnInit } from '@angular/core';
import { MealserviceService } from '../mealservice.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  mealsarray = [];
  ingredientsarray = [];
  randommealsarray = [];
  countriesarray = [];
  constructor(private service:MealserviceService,private activerout:ActivatedRoute) { 
    this.service.meal().subscribe((data)=>{console.log(data);this.mealsarray=data;},
    (error)=>{console.log(error)},
    ()=>{}
    );
    this.service.ingredient().subscribe((data)=>{console.log(data);this.ingredientsarray=data;},
    (error)=>{console.log(error)},
    ()=>{}
    );
    this.service.randommeals().subscribe((data)=>{console.log(data);this.randommealsarray=data},
    (error)=>{console.log(error)},
    ()=>{}
    );
    this.service.countries().subscribe((data)=>{console.log(data);this.countriesarray=data},
    (error)=>{console.log(error)},
    ()=>{});
  }

  ngOnInit(): void {
  }

}