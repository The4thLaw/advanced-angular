import { AccountAction, AccountActionType } from './accounts.actions';
import { Account } from '../models/account';
import { Accounts } from '../models/accounts';

// Always provide a default state to bootstrap the application
const defaultAccountList = new Accounts();

export function accountReducer(accounts: Accounts = defaultAccountList, action: AccountAction): Accounts {
    // TODO: manage negative amounts

    let newState: Accounts;
    let theAccount: Account;

    switch (action.type) {
        case AccountActionType.deposit:
            // We need a deep copy to return a new state, since the state is immutable
            newState = accounts.clone();
            theAccount = newState.accountMap.get(action.accountId);
            if (!theAccount) {
                theAccount = new Account(action.accountId);
                newState.accountMap.set(action.accountId, theAccount);
            }
            theAccount.balance += action.amount;
            return newState;
        case AccountActionType.withdraw:
            newState = accounts.clone();
            theAccount = newState.accountMap.get(action.accountId);
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
