import { Injectable, OnInit } from '@angular/core';
import { Account } from '../models/account';
import { State } from '../reducers';
import { Store, select } from '@ngrx/store';
import { DepositAction, WithdrawAction } from '../reducers/accounts.actions';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {
  /** The accounts, indexed by account ID. */
  //private accounts: Map<string, Account> = new Map();
  private accounts: Account[];

  constructor(private store: Store<State>) {
    // NOTE: OnInit doesn't work on services
    // A subscribe() would give access to the whole state. select(), provided by ngrx, allows keeping just what we need
    this.store.pipe(select('accounts')).subscribe(accounts => {
      this.accounts = accounts;
    });
   }


  getAccount(id): Account {
    //return this.accounts.get(id);
    return null;
  }

  getAccounts(): Account[] {
    //return Array.from(this.accounts.values());
    return this.accounts;
  }

  /**
   * Deposits an amount on a bank account.
   * @param accountId The account ID.
   * @param amount The amount to deposit. Must be strictly positive.
   * @return The account.
   */
  deposit(accountId: string, amount: number): Account {
    if (amount <= 0) {
      throw new Error('Can only deposit positive amounts');
    }
    this.store.dispatch(new DepositAction(accountId, amount));
    return this.getAccount(accountId);
  }

  withdraw(accountId: string, amount: number): Account {
    if (amount <= 0) {
      throw new Error('Can only withdraw positive amounts');
    }
    this.store.dispatch(new WithdrawAction(accountId, amount));
    return this.getAccount(accountId);
  }
}
