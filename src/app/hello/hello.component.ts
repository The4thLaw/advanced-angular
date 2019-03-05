import { Component } from '@angular/core';
import { BankAccountService } from '../services/bank-account.service';
import { Account } from '../models/account';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {

  // Template forms need the name attribute on the <input> element. Without it, it may not work.
  // Else, use reactive forms
  bankAccountId: string ;
  amountToProcess: number;

  constructor(private bankAccountService: BankAccountService) { }

  get accounts(): Account[] {
    return this.bankAccountService.getAccounts();
  }

  select(id: string) {
    this.bankAccountId = id;
  }

  deposit() {
    //try {
      this.bankAccountService.deposit(this.bankAccountId, this.amountToProcess);
    //} catch (e) {
    //  alert(e.message);
    //}
  }

  withdraw() {
    //try {
      this.bankAccountService.withdraw(this.bankAccountId, this.amountToProcess);
    //} catch (e) {
    //  alert(e.message);
    //}
  }
}
