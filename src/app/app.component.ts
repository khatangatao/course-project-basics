import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-project-basics';
  activePage = 'home';

  changeActivePage(activePage: string) {
    this.activePage = activePage;
    console.log(this.activePage);
  }
}
