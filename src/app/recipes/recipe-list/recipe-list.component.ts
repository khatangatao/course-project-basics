import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

 @Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply test',
      'https://get.pxhere.com/photo/dish-meal-food-recipe-breakfast-cuisine-vegetarian-food-italian-food-turkish-food-marinara-sauce-european-food-middle-eastern-food-menemen-1417896.jpg'),
    new Recipe(
      'Good Recipe',
      'Some fantastic ingridients here!',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
