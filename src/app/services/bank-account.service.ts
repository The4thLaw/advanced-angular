import { Injectable } from '@angular/core';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {
  private accounts: Map<string, Account> = new Map();

  constructor() { }

  deposit(accountId: string, amount: number): Account {
    if (amount <= 0) {
      throw new Error('Can only deposit positive amounts');
    }
    if (!this.accounts.get(accountId)) {
      const newAccount = new Account();
      newAccount.id = accountId;
      newAccount.balance = 0;
      this.accounts.set(accountId, newAccount);
    }
    const theAccount = this.accounts.get(accountId);
    theAccount.balance += amount;
    return theAccount;
  }

  withdraw(accountId: string, amount: number): Account {
    if (amount <= 0) {
      throw new Error('Can only withdraw positive amounts');
    }
    if (!this.accounts.get(accountId)) {
      throw new Error('No such account: ' + accountId);
    }
    const theAccount = this.accounts.get(accountId);
    if (theAccount.balance <= amount) {
      throw new Error('Inufficient funds for account ' + accountId);
    }
    theAccount.balance -= amount;
    return theAccount;
  }
}
