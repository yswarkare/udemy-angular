import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'assignment-03';
  showSecret = false;
  clickLog = [];

  listClasses = [
    'list-group-item-primary',
    'list-group-item-secondary',
    'list-group-item-success',
    'list-group-item-danger',
    'list-group-item-warning',
    'list-group-item-info',
    'list-group-item-light',
    'list-group-item-dark',
  ];

  toggleDisplay(): void {
    this.showSecret = !this.showSecret;
    this.clickLog.push(new Date().toISOString());
  }

  returnClass(index: number): string {
    if (index > 7) {
      const result = this.listClasses[1];
      return result;
    } else {
      return this.listClasses[index];
    }
  }
}
