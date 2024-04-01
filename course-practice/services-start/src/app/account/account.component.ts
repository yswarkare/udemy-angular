import { Component, Input } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  statusButtons = [{
    label: 'Active',
    name: 'active',
    class: 'btn btn-success',
  },
  {
    label: 'Inactive',
    name: 'inactive',
    class: 'btn btn-danger',
  },
  {
    label: 'Unknown',
    name: 'unknown',
    class: 'btn btn-warning',
  }
]

  constructor(private accountsService: AccountsService) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    this.accountsService.statusChanged.emit(status);
  }
}
