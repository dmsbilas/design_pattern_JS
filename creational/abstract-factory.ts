// 1. Abstract Products 
interface EmailHeader{
    getContent(): string;
}


interface EmailBody{
    getContent(): string;
}


// 2. Abstract Factory Interface
interface EmailTemplateFactory{
    createHeader(): EmailHeader;
    createBody(): EmailBody;
}

// 3. Transaction Eamil Concrete Products 
class TransactionEmailHeader implements EmailHeader{
    getContent(): string {
        return "Transaction Email Header";
    }
}

class TransactionEmailBody implements EmailBody{
    getContent(): string {
        return "Transaction Email Body";
    }
}

// 4. Transaction Email Factory
class TransactionEmailFactory implements EmailTemplateFactory{
    createHeader(): EmailHeader {
        return new TransactionEmailHeader();
    }
    createBody(): EmailBody {
        return new TransactionEmailBody();
    }
}

// 5. Credit Card payment Email Concrete Products 
class CreditCardPaymentEmailHeader implements EmailHeader{
    getContent(): string {
        return "Credit Card Payment Email Header";
    }
}

class CreditCardPaymentEmailBody implements EmailBody{
    getContent(): string {
        return "Credit Card Payment Email Body";
    }
}

// 6. Credit Card Payment Email Factory
class CreditCardPaymentEmailFactory implements EmailTemplateFactory{
    createHeader(): EmailHeader {
        return new CreditCardPaymentEmailHeader();
    }
    createBody(): EmailBody {
        return new CreditCardPaymentEmailBody();
    }
}

// 7. Client Code
function sendEmail(factory: EmailTemplateFactory){
    const header = factory.createHeader();
    const body = factory.createBody();
    console.log(header.getContent());
    console.log(body.getContent());
}

// 8. Usage
const transactionEmailFactory = new TransactionEmailFactory();
sendEmail(transactionEmailFactory);

const creditCardPaymentEmailFactory = new CreditCardPaymentEmailFactory();
sendEmail(creditCardPaymentEmailFactory);

// 9. Output
// Transaction Email Header
// Transaction Email Body
// Credit Card Payment Email Header
// Credit Card Payment Email Body



