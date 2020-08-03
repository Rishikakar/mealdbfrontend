import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MealserviceService } from '../mealservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userlogin = [];
  userform;

  constructor(private service: MealserviceService, private fb: FormBuilder, private route: Router) {
    this.userform = this.fb.group(
      {
        'LoginEmailId': this.fb.control(""),
        'LoginPassword': this.fb.control("")
      }
    )
  }
  login() {
    console.log(this.userform.value);
    this.service.login(this.userform.value).subscribe((data)=>{console.log(data);
      if(data)
      {
       // console.log(this.userform.controls.LoginEmailId.value);
        if(this.userform.controls.LoginEmailId.value == "adminaccess@gmail.com" && this.userform.controls.LoginPassword.value == "adminaccess" )
        {
          console.log("admin area");
          window.localStorage.setItem("user-token", data); 
        }
        alert("Your login is successfull!!!")
        this.service.isLogedIn(true);
        this.route.navigate(["/mealdb"]);
      }
      
      else{
        alert("Invalid Credentials..")
      }
     
    }
    ,(error)=>{console.log(error);alert("Invalid credentials")});
  }


  ngOnInit(): void {
  }

}