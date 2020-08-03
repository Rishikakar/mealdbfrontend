import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MealserviceService {

  constructor(private http:HttpClient) { }
  postMeal(data):Observable<any>{
    return this.http.post("https://mealdbproject.azurewebsites.net/api/meals/AdminInputForMeals",data);
  }
  login(data):Observable<any>
  {
    return this.http.post("https://mealdbproject.azurewebsites.net/api/meals/login",data);
  }
  register(data):Observable<any>
  {
    return this.http.post("https://mealdbproject.azurewebsites.net/api/Meals/Register",data);
  } 
  meal():Observable<any>
  {
    return this.http.get("https://mealdbproject.azurewebsites.net/api/meals/latestmeals");
  }
  ingredient():Observable<any>
  {
    return this.http.get("https://mealdbproject.azurewebsites.net/api/Meals/MainIngredients");
  }
  randommeals():Observable<any>
  {
    return this.http.get("https://mealdbproject.azurewebsites.net/api/meals/randommeals");
  }
  countries():Observable<any>
  {
    return this.http.get("https://mealdbproject.azurewebsites.net/api/meals/countries");
  }
  getSpecificMeals(id ): Observable<any>{
    return this.http.get("https://mealdbproject.azurewebsites.net/api/meals/MealById"+ '/' + id);
  }
  getMealsByIngredients(id ): Observable<any>{
    return this.http.get("https://mealdbproject.azurewebsites.net/api/meals/IngredientById"+ '/' + id);
  }
  getMealsByCountry(id ): Observable<any>{
    return this.http.get("https://mealdbproject.azurewebsites.net/api/meals/CountryById"+ '/' + id);
  }
  searchMeals(data):Observable<any>{
    return this.http.post("https://mealdbproject.azurewebsites.net/api/Meals/Search",data);
  }
    searching(id ): Observable<any>{
      return this.http.get("https://mealdbproject.azurewebsites.net/api/Meals/searching"+ '/' + id);
    }
   
    searchings(id ): Observable<any>{
      return this.http.get("https://mealdbproject.azurewebsites.net/api/meals/searchingbyletter"+ '/' + id);
    }
  }