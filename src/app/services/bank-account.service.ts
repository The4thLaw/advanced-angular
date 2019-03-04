import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {
  private accounts = {};

  constructor() { }

  deposit(accountId: string, amount: number) {
    if (amount <= 0) {
      throw new Error('Can only deposit positive amounts');
    }
    if (!this.accounts[accountId]) {
      this.accounts[accountId] = {
        id: accountId,
        amount: 0
      };
    }
    const theAccount = this.accounts[accountId];
    this.accounts[accountId].amount += amount;
    return theAccount;
  }

  withdraw(accountId: string, amount: number) {
    if (amount <= 0) {
      throw new Error('Can only withdraw positive amounts');
    }
    if (typeof(this.accounts[accountId]) === 'undefined') {
      throw new Error('No such account: ' + accountId);
    }
    const theAccount = this.accounts[accountId];
    if (theAccount.amount <= amount) {
      throw new Error('Inufficient funds for account ' + accountId);
    }
    theAccount.amount -= amount;
    return theAccount;
  }
}
