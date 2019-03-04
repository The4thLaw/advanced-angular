import { Injectable } from '@angular/core';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {
  private accounts = {};

  constructor() { }

  deposit(accountId: string, amount: number): Account {
    if (amount <= 0) {
      throw new Error('Can only deposit positive amounts');
    }
    if (!this.accounts[accountId]) {
      const newAccount = new Account();
      newAccount.id = accountId;
      newAccount.balance = 0;
      this.accounts[accountId] = newAccount;
    }
    const theAccount = this.accounts[accountId];
    this.accounts[accountId].balance += amount;
    return theAccount;
  }

  withdraw(accountId: string, amount: number): Account {
    if (amount <= 0) {
      throw new Error('Can only withdraw positive amounts');
    }
    if (!this.accounts[accountId]) {
      throw new Error('No such account: ' + accountId);
    }
    const theAccount = this.accounts[accountId];
    if (theAccount.balance <= amount) {
      throw new Error('Inufficient funds for account ' + accountId);
    }
    theAccount.balance -= amount;
    return theAccount;
  }
}
