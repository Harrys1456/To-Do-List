import { Injectable } from '@angular/core';
import { Observable, of as ObservableOf } from 'rxjs';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  private category: Category[] = []

  constructor() { }

  // Gets the list of categoies
  // return: The list of category as an observable
  getCategories(): Observable<Category[]>{
    return ObservableOf(this.category);
  }

  // Creates a new category and adds it to list of category
  createCategory(): void{

  }

  // Deletes a category from list of category
  deleteCategory(category: Category): void{

  }
}
