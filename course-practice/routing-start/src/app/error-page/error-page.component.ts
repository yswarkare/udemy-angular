import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css',
})
export class ErrorPageComponent implements OnInit, OnDestroy {
  errorMessage: string;
  dataSubscription: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // this.errorMessage = this.route.snapshot.data['message']
    this.dataSubscription = this.route.data.subscribe((data) => {
      this.errorMessage = data['message'];
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }
}
