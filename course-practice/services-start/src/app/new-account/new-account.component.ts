import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  showAlert: boolean = false;

  constructor(private accountsService: AccountsService) {
    this.accountsService.statusChanged.subscribe((status) => {
      console.log(status);
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 2000);
    });
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
  }
}
