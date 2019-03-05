import { Action } from '@ngrx/store';

export enum AccountActionType {
    deposit = '[BankAccountService] Deposit',
    withdraw = '[BankAccountService] Withdraw'
}

export abstract class AccountAction implements Action {
    type: string;

    constructor(public accountId: string, public amount: number) { }
}

export class DepositAction extends AccountAction {
    readonly type = AccountActionType.deposit;
}

export class WithdrawAction extends AccountAction {
    readonly type = AccountActionType.withdraw;
}
