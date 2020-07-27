import { Component, OnInit } from '@angular/core';
import { MealserviceService} from '../mealservice.service';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userform;
  constructor(private service:MealserviceService,private fb:FormBuilder) { 
    this.userform = this.fb.group(
      {
        'UserFirstName' : this.fb.control(""),
        'UserSecondName' : this.fb.control(""),
        'UserEmail': this.fb.control(""),
        'UserPassword': this.fb.control(""),
        //'repeatpass' : this.fb.control("")
      }
    )
 }
  register()
  {
    console.log(this.userform.value);
    this.service.register(this.userform.value).subscribe((data)=>{console.log(data)},(error)=>{alert(error);console.log(error)})
  }


  ngOnInit(): void {
  }

}