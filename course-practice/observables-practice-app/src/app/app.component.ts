import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated: boolean = false;
  activatedSubscription: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    // this.userService.activatedEmitter.subscribe((didActivated: boolean) => {
    //   this.userActivated = didActivated;
    // });

    this.activatedSubscription = this.userService.activatedSubject.subscribe(
      (didActivated: boolean) => {
        this.userActivated = didActivated;
      }
    );
  }

  ngOnDestroy() {
    this.activatedSubscription.unsubscribe();
  }
}
