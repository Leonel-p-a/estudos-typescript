export const bootstrap = (): void => {
    class Logger {
        public static info(message: string): void {
            console.log(message);
        }

        protected static warn(message: string): void {
            console.warn(message);
        }        
        
        protected static error(message: string): void {
            console.error(message);
        }   
        
        // ACESSO NA CLASSE
        public static wrapperLogger( type: 'INFO' | 'WARN' | 'ERROR', message: string ): void {
            const msg = `${Date.now()} - ${message}`;

            switch (type) {                
                case 'INFO':
                    this.info(msg);
                    break;
            
                case 'WARN':
                    this.warn(msg);
                    break;

                case 'ERROR':
                    this.error(msg);
                    break;
            }
        }
    }

    // ACESSO FORA DA CLASSE
    Logger.info('Acesso público');

    class LoggerSlack extends Logger {
        public static send(message: string): void {
            // ACESSO NA SUBCLASSE
            this.info('Public');
            this.warn('Protected');
        }
    }
};