import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  items = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Archived',
      path: '/archived',
    },
  ];
}
