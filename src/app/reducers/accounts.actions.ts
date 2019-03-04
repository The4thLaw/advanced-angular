import { Action } from '@ngrx/store';

export enum AccountActionType {
    deposit = '[Hello] Deposit',
    withdraw = '[Hello] Withdraw'
}

export abstract class AccountAction implements Action {
    type: string;

    constructor(public accountId: string, public amount: number) {}
}

export class DepositAction extends AccountAction {
    readonly type = AccountActionType.deposit;
}

export class WithdrawAction extends AccountAction {
    readonly type = AccountActionType.withdraw;
}
