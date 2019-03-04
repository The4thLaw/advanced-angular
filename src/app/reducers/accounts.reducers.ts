import { Action, State } from '@ngrx/store';
import { AccountAction, AccountActionType } from './accounts.actions';
import { Account } from '../models/account';

// Always provide a default state to bootstrap the application
const defaultAccountList = new Map();

function clone<T>(input: T): T {
    // Not pretty, but fonctional
    // Can't use the spread operator or the copy constructor because we need a deep copy
    return JSON.parse(JSON.stringify(input));
}

export function accountReducer(accounts: Map<string, Account> = defaultAccountList, action: AccountAction): Map<string, Account> {
    console.log('Got an action', action);

    // TODO: manage negative amounts

    let newState;
    let theAccount;

    switch (action.type) {
        case AccountActionType.deposit:
            // We need a deep copy to return a new state, since the state is immutable
            newState = clone(accounts);
            theAccount = accounts.get(action.accountId);
            if (!theAccount) {
                theAccount = new Account(action.accountId);
                newState.set(action.accountId, theAccount);
            }
            theAccount.balance += action.amount;
            return newState;
        case AccountActionType.withdraw:
            newState = clone(accounts);
            theAccount = accounts.get(action.accountId);
            if (!theAccount) {
                // TODO: manage the error
                console.warn('No such account: ' + action.accountId);
                return accounts;
            }
            // TODO: manage insufficient funds
            theAccount.balance -= action.amount;
            return newState;
        default:
            console.warn('Unknown action type: ' + action.type);
            return accounts;
    }
}
