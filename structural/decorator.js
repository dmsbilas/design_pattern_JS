var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Concrete Component
var BasicTransaction = /** @class */ (function () {
    function BasicTransaction() {
    }
    BasicTransaction.prototype.process = function (amount) {
        console.log("Processing transaction of $".concat(amount));
    };
    return BasicTransaction;
}());
// Base Decorator
var TransactionDecorator = /** @class */ (function () {
    function TransactionDecorator(transaction) {
        this.transaction = transaction;
    }
    TransactionDecorator.prototype.process = function (amount) {
        this.transaction.process(amount);
    };
    return TransactionDecorator;
}());
// Concrete Decorator: Logging
var LoggingTransaction = /** @class */ (function (_super) {
    __extends(LoggingTransaction, _super);
    function LoggingTransaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoggingTransaction.prototype.process = function (amount) {
        console.log("[LOG] Starting transaction of $".concat(amount));
        _super.prototype.process.call(this, amount);
        console.log("[LOG] Completed transaction of $".concat(amount));
    };
    return LoggingTransaction;
}(TransactionDecorator));
// Concrete Decorator: Fraud Detection
var FraudDetectionTransaction = /** @class */ (function (_super) {
    __extends(FraudDetectionTransaction, _super);
    function FraudDetectionTransaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FraudDetectionTransaction.prototype.process = function (amount) {
        if (amount > 10000) {
            console.log("[ALERT] Possible fraud detected on transaction of $".concat(amount));
        }
        _super.prototype.process.call(this, amount);
    };
    return FraudDetectionTransaction;
}(TransactionDecorator));
// Client code
var transaction = new BasicTransaction();
transaction = new LoggingTransaction(transaction);
transaction = new FraudDetectionTransaction(transaction);
transaction.process(12000);
