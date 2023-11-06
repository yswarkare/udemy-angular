import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("a test recipe", "this is a test recipe", "https://www.uaex.edu/life-skills-wellness/food-nutrition/eating-well/EFNEP/images/Recipes-Banner.jpg"),
    new Recipe("Paneer Butter Masala", "Paneer Butter Masala Recipe", "https://endpoint916369.azureedge.net/uploads/articles/9659.jpg?width=770&height=470&mode=crop&anchor=topleft"),
    new Recipe("Paneer Butter Masala", "Instant Pot Paneer Butter Masala", "https://www.corriecooks.com/wp-content/uploads/2018/09/Instant-Pot-Paneer-Butter-Masala.jpg"),
    new Recipe("Paneer Butter Masala", "Paneer Butter Masala Tasty vegetarian dish", "https://cdn.citymapia.com/assets/business/2591/portfolio/14262/2591_636910555418214926.jpg?rendered=true")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
