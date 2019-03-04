import { Component, OnInit } from '@angular/core';
import { BankAccountService } from '../services/bank-account.service';
import { Account } from '../models/account';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  bankAccountId: string;
  amountToProcess: number;

  constructor(private bankAccountService: BankAccountService) { }

  ngOnInit() {
    // TODO: remove this:
    this.bankAccountService.deposit('BE1', 100);
  }

  get accounts(): Account[] {
    return this.bankAccountService.getAccounts();
  }

  select(id: string) {
    this.bankAccountId = id;
  }

  deposit() {
    try {
      this.bankAccountService.deposit(this.bankAccountId, this.amountToProcess);
    } catch (e) {
      alert(e);
    }
  }

  withdraw() {
    try {
      this.bankAccountService.withdraw(this.bankAccountId, this.amountToProcess);
    } catch (e) {
      alert(e);
    }
  }
}
