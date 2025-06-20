// 1. Define the interface
interface Notification {
  send(): void;
}

// 2. Implement different Notification Types
class EmailNotification implements Notification {
  send(): void {
    console.log("Sending email notification");
  }
}

class SMSNotification implements Notification {
  send(): void {
    console.log("Sending SMS notification");
  }
}


// 3. Create the Factory Method
class NotificationFactory {
  static getNotification(type: string): Notification {
    switch (type.toLowerCase()) {
      case "email":
        return new EmailNotification();
      case "sms":
        return new SMSNotification();
      default:
        throw new Error(`Invalid notification type: ${type}`);
    }
  }
}


// 4. Use the Factory Method
const emailNotification = NotificationFactory.getNotification("email");
emailNotification.send();

const smsNotification = NotificationFactory.getNotification("sms");
smsNotification.send();




