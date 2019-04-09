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
  @Output() featureSelected = new EventEmitter<string>();

  comebackToHomePage() {
    this.currentPage = 'home';
    this.featureSelected.emit(this.currentPage);
  }

  onSelect(feature: string) {
    this.currentPage = 'recipes';
    this.featureSelected.emit(feature);
  }

  // selectShoppingList() {
  //   this.currentPage = 'shopping';
  //   this.featureSelected.emit(this.currentPage);
  // }
}
