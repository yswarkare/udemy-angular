import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is a simple test recipe',
      'https://www.cookwithmanali.com/wp-content/uploads/2017/03/Best-Kadai-Paneer.jpg'
    ),
    new Recipe(
      'A test recipe 2',
      'This is a simple test recipe',
      'https://www.cookwithmanali.com/wp-content/uploads/2017/03/Best-Kadai-Paneer.jpg'
    ),
  ];
}
