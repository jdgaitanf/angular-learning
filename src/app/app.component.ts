import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName: String = '';
  isEmptyField: Boolean = true;

  onResetUserName() {
    this.userName = '';
  }
}
