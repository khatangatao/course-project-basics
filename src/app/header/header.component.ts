import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.template.html'
})
export class HeaderComponent{
  currentPage: string = 'home';
  @Output() currentPageExposed = new EventEmitter<string>();

  comebackToHomePage() {
    this.currentPage = 'home';
    this.currentPageExposed.emit(this.currentPage);
  }

  selectRecipeList() {
    this.currentPage = 'recipes';
    this.currentPageExposed.emit(this.currentPage);
  }

  selectShoppingList() {
    this.currentPage = 'shopping';
    this.currentPageExposed.emit(this.currentPage);
  }
}
