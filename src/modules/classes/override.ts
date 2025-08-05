import { log } from "console"

export const bootstrap = (): void => {
    class PaymentMethod {
        processPayment(amount: number): void {
            console.log(`Processamento genérico de R$ ${amount.toFixed(2)}`);
        }
    }

    class CreditCardPayment extends PaymentMethod {
        override processPayment(amount: number): void {
            console.log(`Pagamento via cartão de crédito de R$ ${amount.toFixed}`)
        }
    }

    const payment1 = new PaymentMethod();
    const payment2 = new CreditCardPayment();
    payment1.processPayment(2300);
    payment2.processPayment(3000)
}