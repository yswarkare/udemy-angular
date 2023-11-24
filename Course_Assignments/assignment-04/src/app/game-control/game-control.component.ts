import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent {
  @Output() counterEmitter = new EventEmitter<number>();
  @Output() resetCounter = new EventEmitter<number>();
  counter: number = 0;
  intervalRef;

  startCounter() {
    this.intervalRef = setInterval(() => {
      this.counterEmitter.emit(this.counter + 1);
      this.counter++;
    }, 1000);
  }

  stopCounter() {
    clearInterval(this.intervalRef);
  }

  resetTheCounter() {
    clearInterval(this.intervalRef);
    this.resetCounter.emit();
    this.counter = 0;
  }
}
