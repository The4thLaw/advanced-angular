export class Accounts {
    accountMap: Map<string, Account> = new Map();

    clone(): Accounts {
        const clonedMap: Map<string, Account> = new Map();
        const clone = new Accounts();

        

        clone.accountMap = clonedMap;
        return clone;
    }
}
