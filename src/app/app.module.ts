import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecipiesComponent } from './recipies/recipies.component';
import { IndexComponent } from './index/index.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodTablesComponent } from './food-tables/food-tables.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchmealbyfirstletterComponent } from './searchmealbyfirstletter/searchmealbyfirstletter.component';
import { AdminComponent } from './admin/admin.component';
@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    IngredientsComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    RecipiesComponent,
    IndexComponent,
    FoodListComponent,
    FoodTablesComponent,
    SearchbarComponent,
    SearchmealbyfirstletterComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
