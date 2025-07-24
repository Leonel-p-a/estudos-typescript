export const bootstrap = (): void => {
    class BankAccount {
        protected holder: string;
        protected balance: number;

        constructor(holder: string, balance: number) {
            this.holder = holder;
            this.balance = balance;
        }

        public getHolder(): string {
            return this.holder;
        }

        public getBalance(): number {
            return this.balance;
        }
    }

    class CheckingAccount extends BankAccount {
        private overdraftLimit: number;

        constructor(holder: string, balance: number, overdraftLimit: number) {
            super(holder, balance);
            this.overdraftLimit = overdraftLimit;
        }

        public getOverdraftLimit(): number {
            return this.overdraftLimit;
        }
    }

    class SavingsAccount extends BankAccount {
        private interestRate: number;

        constructor(holder: string, balance: number, interestRate: number) {
            super(holder, balance);
            this.interestRate = interestRate;
        }

        public getInterestRate(): number {
            return this.interestRate;
        }
    }

    // lista de contas bancárias

    const accountList: BankAccount[] = [
        new CheckingAccount('Leonel', 2500, 7000),
        new SavingsAccount('Roberta', 5000, 0.005),
        new CheckingAccount('Manuela', 3700, 3000),
        new SavingsAccount('Ana', 7000, 0.008),
    ];

    function processAccount(accounts: BankAccount[]): void {
        accounts.forEach(account => {
            if (account instanceof CheckingAccount) {
                console.log('Processando a conta corrente: ', account.getOverdraftLimit());
            } else if (account instanceof SavingsAccount) {
                console.log('Processando a conta poupança: ', account.getInterestRate());
            }
            console.log('---------------------');
        })
    }

    processAccount(accountList);

    const novaConta = new CheckingAccount('L', 1000, 500);
    console.log(novaConta);
};