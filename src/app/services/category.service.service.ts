import { Injectable } from '@angular/core';
import { Observable, of as ObservableOf } from 'rxjs';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private category: Category[] = []

  constructor() { 
    this.category = [
      new Category("Work"),
      new Category("Personal")
    ]
  }

  // Gets the list of categoies
  // return: The list of category as an observable
  getCategories(): Observable<Category[]>{
    return ObservableOf(this.category);
  }

  // Creates a new category and adds it to list of category
  createCategory(category_name: string): void{
    this.category.push(new Category(category_name))
  }

  // Deletes a category from list of category
  deleteCategory(category: Category): void{

  }
}
