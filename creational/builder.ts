class BankAccount {
    private accountNumber: string;
    private accountHolder: string;
    private balance: number;
    private accountType: string;
    private accountStatus: string;
    private accountCreatedAt: Date;
    private accountUpdatedAt: Date;
}

interface AccountBuilder {
    setAccountNumber(accountNumber: string): void;
    setAccountHolder(accountHolder: string): void;
    setBalance(balance: number): void;
    setAccountType(accountType: string): void;
    setAccountStatus(accountStatus: string): void;
    setAccountCreatedAt(accountCreatedAt: Date): void;
    setAccountUpdatedAt(accountUpdatedAt: Date): void;
    getAccount(): BankAccount;
}

class BankAccountBuilder implements AccountBuilder {

    private ba: BankAccount;

    constructor() {
        this.ba = new BankAccount();
    }

    setAccountNumber(accountNumber: string): void {
        this.ba.accountNumber = accountNumber;
    }

    setAccountHolder(accountHolder: string): void {
        this.ba.accountHolder = accountHolder;
    }

    setBalance(balance: number): void {
        this.ba.balance = balance;
    }
    
    setAccountType(accountType: string): void {
        this.ba.accountType = accountType;
    }

    setAccountStatus(accountStatus: string): void {
        this.ba.accountStatus = accountStatus;
    }

    setAccountCreatedAt(accountCreatedAt: Date): void {
        this.ba.accountCreatedAt = accountCreatedAt;
    }

    setAccountUpdatedAt(accountUpdatedAt: Date): void {
        this.ba.accountUpdatedAt = accountUpdatedAt;
    }

    getAccount(): BankAccount {
        return this.ba;
    }
}

