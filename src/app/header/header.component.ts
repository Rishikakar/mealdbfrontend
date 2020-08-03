import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MealserviceService } from '../mealservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private route: Router,private http:MealserviceService) { }
  logout()
  {
    this.route.navigate(['']);
  }

  ngOnInit(): void {
  }

}
