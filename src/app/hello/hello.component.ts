import { Component } from '@angular/core';
import { BankAccountService } from '../services/bank-account.service';
import { Account } from '../models/account';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {

  // TODO: figure out why this doesn't work without initialization
  bankAccountId: string = '';
  amountToProcess: number = null;

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
