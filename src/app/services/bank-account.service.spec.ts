import { TestBed } from '@angular/core/testing';

import { BankAccountService } from './bank-account.service';

describe('BankAccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BankAccountService = TestBed.get(BankAccountService);
    expect(service).toBeTruthy();
  });

  it('should allow depositing on empty accounts, and return the account details account', () => {
    const service: BankAccountService = TestBed.get(BankAccountService);
    const returnedAccount = service.deposit('BE1', 100);
    expect(returnedAccount).toBeTruthy();
    expect(returnedAccount.id).toEqual('BE1');
    expect(returnedAccount.balance).toEqual(100);
  });

  it('should not allow withdrawing from empty accounts', () => {
    const service: BankAccountService = TestBed.get(BankAccountService);
    // We can't expect the .withdraw call directly to throw an error,
    // because it will throw the error and the .toThrowError won't ever be called.
    // So we wrap it in a function
    expect(() => service.withdraw('BE1', 100)).toThrowError();
  });

  it('should not allow depositing or withdrawing negative amounts', () => {
    const service: BankAccountService = TestBed.get(BankAccountService);
    service.deposit('BE1', 100);
    expect(() => service.deposit('BE1', -1)).toThrowError();
    expect(() => service.withdraw('BE1', -1)).toThrowError();
  });

  it('should not allow withdrawing an excessive amount', () => {
    const service: BankAccountService = TestBed.get(BankAccountService);
    service.deposit('BE1', 100);
    expect(() => service.withdraw('BE1', 101)).toThrowError();
  });

  it('should allow withdrawing from existing account, and return the right balance', () => {
    const service: BankAccountService = TestBed.get(BankAccountService);
    service.deposit('BE1', 100);
    const returnedAccount = service.withdraw('BE1', 80);
    expect(returnedAccount.id).toEqual('BE1');
    expect(returnedAccount.balance).toEqual(20);
  });

  it('should return a copy for the array of accounts', () => {
    const service: BankAccountService = TestBed.get(BankAccountService);
    const account = service.deposit('BE1', 100);
    service.getAccounts()[0].balance = 0;
    expect(service.getAccount('BE1').balance).toEqual(100);
  });
});
