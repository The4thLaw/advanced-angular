import { Action, State } from '@ngrx/store';
import { AccountAction, AccountActionType } from './accounts.actions';
import { Account } from '../models/account';

// Always provide a default state to bootstrap the application
const defaultAccountList = [];

export function accountReducer(accounts: Account[] = defaultAccountList, action: AccountAction): Account[] {
    // TODO: manage negative amounts

    let newState: Account[];
    let theAccount: Account;

    // TODO: find a way to work with Map because this is O(n) :(
    switch (action.type) {
        case AccountActionType.deposit:
            // We need a deep copy to return a new state, since the state is immutable
            newState = [...accounts];
            theAccount = newState.find(account => account.id === action.accountId);
            if (!theAccount) {
                theAccount = new Account(action.accountId);
                newState.push(theAccount);
            }
            theAccount.balance += action.amount;
            return newState;
        /*case AccountActionType.withdraw:
            newState = [...accounts];
            theAccount = accounts.get(action.accountId);
            if (!theAccount) {
                // TODO: manage the error
                console.warn('No such account: ' + action.accountId);
                return accounts;
            }
            // TODO: manage insufficient funds
            theAccount.balance -= action.amount;
            return newState;*/
        default:
            console.warn('Unknown action type: ' + action.type);
            return accounts;
    }
}
