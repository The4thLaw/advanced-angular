import { Account } from './account';

export class Accounts {
    accountMap = {};


    clone(): Accounts {
        const clone = new Accounts();

        const clonedMap = {};
        for (const accountId of Object.keys(this.accountMap)) {
            clonedMap[accountId] = this.accountMap[accountId].clone();
        }

        clone.accountMap = clonedMap;

        return clone;
    }

    asArray(): Account[] {
        return Object.values(this.accountMap);
    }

    addAccount(accountId: string, account: Account) {
        this.accountMap[accountId] = account;
    }

    getAccount(accountId: string) {
        return this.accountMap[accountId];
    }
}
