export class Account {
    constructor(public readonly id: string, public balance: number = 0) { }

    clone(): Account {
        return new Account(this.id, this.balance);
    }
}
