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
}
