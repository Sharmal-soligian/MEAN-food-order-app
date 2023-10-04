import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute
  ) {
    // Get params
    this.route.params.subscribe((param) => {
      if (param['searchTerm']) {
        this.foods = this.foodService.getAllFoodsSearch(param['searchTerm']);
      } else if (param['tag']) {
        this.foods = this.foodService.getAllFoodByTag(param['tag']);
      } else {
        this.foods = foodService.getAll();
      }
    })
  }

  ngOnInit(): void {

  }

  trackFood(index: number, food: Food) {
    return food.id;
  }
}
