import { Account } from './account';

export class Accounts {
    accountMap: Map<string, Account> = new Map();

    clone(): Accounts {
        const clonedMap: Map<string, Account> = new Map();
        this.accountMap.forEach((value, key) => {
            clonedMap.set(key, value.clone());
        });

        const clone = new Accounts();
        clone.accountMap = clonedMap;
        return clone;
    }

    asArray(): Account[] {
        return Array.from(this.accountMap.values());
    }

    addAccount(accountId: string, account: Account) {
        return this.accountMap.set(accountId, account);
    }

    getAccount(accountId: string) {
        return this.accountMap.get(accountId);
    }
}
