import { EventEmitter } from '@angular/core';

export class CounterService {
  activeUpdates: number = 0;
  inactiveUpdates: number = 0;

  counterUpdated: EventEmitter<{
    inactiveUpdates: number;
    activeUpdates: number;
  }> = new EventEmitter<{ inactiveUpdates: number; activeUpdates: number }>();

  updatedActive() {
    this.activeUpdates++;
    console.log(this.activeUpdates, this.inactiveUpdates);
    this.counterUpdated.emit({
      inactiveUpdates: this.inactiveUpdates,
      activeUpdates: this.activeUpdates,
    });
  }

  updatedInactive() {
    this.inactiveUpdates++;
    console.log(this.activeUpdates, this.inactiveUpdates);
    this.counterUpdated.emit({
      inactiveUpdates: this.inactiveUpdates,
      activeUpdates: this.activeUpdates,
    });
  }
}
