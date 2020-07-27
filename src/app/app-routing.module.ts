import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { CountriesComponent } from './countries/countries.component';
import { IndexComponent } from './index/index.component';
import { SearchbarComponent } from './searchbar/searchbar.component';


const routes: Routes = [
  
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"mealdb",
    component:IndexComponent
  },
  {
    path:"mealdb/recipies/:id",
    component:RecipiesComponent
  },
  {
    path:"mealdb/ingredients/:id",
    component:IngredientsComponent
  },
  {
    path: 'mealdb/ingredients/:id/mealdb/recipies/:id',   redirectTo: '/mealdb/recipies/:id', pathMatch: 'full' 
  },
  {
    path:"mealdb/countries/:id",
    component : CountriesComponent
  },
  {
    path: 'mealdb/countries/:id/mealdb/recipies/:id', redirectTo: '/mealdb/recipies/:id', pathMatch: 'full'
  },
  {
    path: 'mealdb/recipies/:id/home',redirectTo: 'mealdb',pathMatch: 'full'
  },
  {
    path: 'mealdb/ingredients/:id/home',redirectTo: 'mealdb',pathMatch: 'full'
  },
  {
    path: 'mealdb/countries/:id/home',redirectTo: 'mealdb',pathMatch: 'full'
  },
  {
    path: 'mealdb/ingredients/:id/mealdb/recipies/:id/home',redirectTo: 'mealdb',pathMatch: 'full'
  },
  {
    path: 'mealdb/countries/:id/mealdb/recipies/:id/home', redirectTo: 'mealdb', pathMatch: 'full'
  },
  {
    path:"mealdb/searchlist/:id",
    component:SearchbarComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }