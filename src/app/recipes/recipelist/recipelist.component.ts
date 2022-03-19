import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test', 'test', 'https://myfoodbook.com.au/sites/default/files/collections_image/Easy_dinner_recipes_for%20beginners.jpg'),
    new Recipe('Test', 'test', 'https://myfoodbook.com.au/sites/default/files/collections_image/Easy_dinner_recipes_for%20beginners.jpg')

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
