import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute,NavigationExtras} from '@angular/router';
import { MealserviceService } from '../mealservice.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { SearchbarComponent } from '../searchbar/searchbar.component';




@Component({
  selector: 'app-food-tables',
  templateUrl: './food-tables.component.html',
  styleUrls: ['./food-tables.component.css']
})
export class FoodTablesComponent implements OnInit {
  searchform;
  SearchKeyWord;
  id;
  MealNumber;
  IngredientNumber;
  constructor( private fb: FormBuilder,private activatedRoute: ActivatedRoute,private service:MealserviceService,private router:Router) { 
    this.searchform = this.fb.group(
      {
        'SearchKeyWord': this.fb.control("")
      }
    )
   
    //  this.service.searchMeals(this.searchform.value).subscribe((data)=>{console.log(data)},(error)=>{},()=>{});
    this.SearchKeyWord=this.searchform.value;
    console.log(this.SearchKeyWord);
    this.service.meal().subscribe((data)=>{console.log(data);this.MealNumber=data.length},
    (error)=>{console.log(error)},
    ()=>{}
    );
    this.service.ingredient().subscribe((data)=>{console.log(data);this.IngredientNumber=data.length},
    (error)=>{console.log(error)},
    ()=>{}
    );
  }
  search(){
    console.log(this.searchform.value)
    this.id = this.searchform.value;
    console.log(this.id.SearchKeyWord)
    this.service.searchMeals(this.searchform.value).subscribe((data)=>{console.log(data);},(error)=>{},()=>{});  
    this.router.navigate(['mealdb/searchlist',this.id.SearchKeyWord]); 
  }
  
  ngOnInit(): void {
  }

}