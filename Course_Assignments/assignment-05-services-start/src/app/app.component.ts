import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  activeToInactive: number = 0;

  inactiveToActive: number = 0;

  constructor(
    private usersService: UsersService,
    private counterService: CounterService
  ) {
    this.usersService.updateUser.subscribe(({ status, id }) => {
      switch (status) {
        case 'active': {
          this.usersService.setActive(id);
          break;
        }
        case 'inactive': {
          this.usersService.setInactive(id);
          break;
        }
        default:
          break;
      }
    });

    this.counterService.counterUpdated.subscribe(
      ({ activeUpdates, inactiveUpdates }) => {
        this.activeToInactive = inactiveUpdates;
        this.inactiveToActive = activeUpdates;
      }
    );
  }
}
