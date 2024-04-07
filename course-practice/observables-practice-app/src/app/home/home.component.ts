import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  counterSubscription: Subscription;
  constructor() {}

  ngOnInit() {
    // this.counterSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count > 2) {
          observer.complete('Counter is greater than 3!');
        }
        if (count > 3) {
          observer.error(new Error('Counter is greater than 3!'));
        }
        count++;
      }, 1000);
    });

    this.counterSubscription = customIntervalObservable
      .pipe(
        filter((data: number) => {
          return data > 0;
        }),
        map((data: number) => {
          return 'Round ' + (data + 1);
        })
      )
      .subscribe(
        (data: number) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
          alert(error.message);
        },
        (data) => {
          console.log(data);
        }
      );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
