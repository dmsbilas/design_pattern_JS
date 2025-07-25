// Component Interface
interface Transaction {
    process(amount: number): void;
}

// Concrete Component
class BasicTransaction implements Transaction {
    process(amount: number): void {
        console.log(`Processing transaction of $${amount}`);
    }
}

// Base Decorator
class TransactionDecorator implements Transaction {
    protected transaction: Transaction;

    constructor(transaction: Transaction) {
        this.transaction = transaction;
    }

    process(amount: number): void {
        this.transaction.process(amount);
    }
}

// Concrete Decorator: Logging
class LoggingTransaction extends TransactionDecorator {
    process(amount: number): void {
        console.log(`[LOG] Starting transaction of $${amount}`);
        super.process(amount);
        console.log(`[LOG] Completed transaction of $${amount}`);
    }
}

// Concrete Decorator: Fraud Detection
class FraudDetectionTransaction extends TransactionDecorator {
    process(amount: number): void {
        if (amount > 10000) {
            console.log(`[ALERT] Possible fraud detected on transaction of $${amount}`);
        }
        super.process(amount);
    }
}

// Client code
let transaction: Transaction = new BasicTransaction();
transaction = new LoggingTransaction(transaction);
transaction = new FraudDetectionTransaction(transaction);

transaction.process(12000);
