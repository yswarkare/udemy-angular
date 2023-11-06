import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient("Paneer", 0.25),
    new Ingredient("Milk", 0.25),
    new Ingredient("Tomato", 0.5),
    new Ingredient("Onion", 0.25)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
