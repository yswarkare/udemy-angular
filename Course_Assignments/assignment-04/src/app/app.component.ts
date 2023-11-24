import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'assignment-04';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  setGameCounter(counter) {
    if (counter % 2 === 0) {
      this.evenNumbers.push(counter);
    } else {
      this.oddNumbers.push(counter);
    }
  }

  resetNumbers() {
    this.evenNumbers = [];
    this.oddNumbers = [];
  }
}
