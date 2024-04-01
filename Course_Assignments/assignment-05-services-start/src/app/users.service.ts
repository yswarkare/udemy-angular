import { EventEmitter, Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  updateUser: EventEmitter<{ status: string; id: number }> = new EventEmitter<{
    status: string;
    id: number;
  }>();

  inactivateUser: EventEmitter<number> = new EventEmitter<number>();

  constructor(private counterService: CounterService) {}

  setInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.updatedInactive();
  }

  setActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.updatedActive();
  }
}
