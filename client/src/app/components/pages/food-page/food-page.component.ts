import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit {
  food!: Food;
  constructor(
    private rotue: ActivatedRoute,
    private foodService: FoodService
  ) {
    this.rotue.params.subscribe((param) => {
      if (param['id']) {
        this.food = this.foodService.getFoodById(param['id']);
      }
    })
  }

  ngOnInit(): void {

  }

}
