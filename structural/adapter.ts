//understand the problem

class OldBankPayment {
    BankPay(amount: number) {
        console.log(`OldBankPayment: Paying ${amount} to the bank`);
    }
}



interface Payment {
    Pay(amount: number): void;
}


class StripePayment implements Payment {
    StripePay(amount: number) {
        console.log(`StripePayment: Paying ${amount} to the bank`);
    }
    Pay(amount: number): void {
        this.StripePay(amount);
    }
}

class PaypalPayment implements Payment {
    PaypalPay(amount: number) {
        console.log(`PaypalPayment: Paying ${amount} to the bank`);
    }
    Pay(amount: number): void {
        this.PaypalPay(amount);
    }
}

class PaymentAdapter implements Payment {
    private oldBankPayment: OldBankPayment;
    private stripePayment: StripePayment;
    private paypalPayment: PaypalPayment;

    constructor(oldBankPayment: OldBankPayment, stripePayment: StripePayment, paypalPayment: PaypalPayment) {
        this.oldBankPayment = oldBankPayment;
        this.stripePayment = stripePayment;
        this.paypalPayment = paypalPayment;
    }

    Pay(amount: number, paymentMedium: string): void {
        if (paymentMedium === "stripe") {
            this.stripePayment.Pay(amount);
        } else if (paymentMedium === "paypal") {
            this.paypalPayment.Pay(amount);
        } else if (paymentMedium === "old_bank") {
            this.oldBankPayment.BankPay(amount);
        }
    }
}

const paymentAdapter = new PaymentAdapter(new OldBankPayment(), new StripePayment(), new PaypalPayment());
paymentAdapter.Pay(100, "stripe");
paymentAdapter.Pay(100, "paypal");
paymentAdapter.Pay(100, "old_bank");




