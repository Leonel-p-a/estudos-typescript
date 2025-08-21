export const bootstrap = (): void => {
    const UserLogin = {
        username: 'Leonel',
        permissions: ['User'],
    }

    function RateLimit(limitInMilliseconds: number): MethodDecorator {
        return <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => {
            const originalMethod = descriptor.value as () => T;
            let lastExecution = 0; // a última execução

            descriptor.value = function(this: any) {
                // liberar a execução do método somente se o intervalo entre a última execução e o instante atual for atendido
                const now = Date.now(); // instante atual

                if (now - lastExecution < limitInMilliseconds) {
                    console.error(`O método ${String(propertyKey)} só pode ser chamado novamente após ${limitInMilliseconds}ms`);
                    descriptor.value = function() {} as T;
                } else {
                    lastExecution = now;
                    // conecta o contexto da nova função associada ao descriptor.value com o contexto do método original que está sendo decorado
                    return originalMethod.apply(this);
                }
            } as T;
            return descriptor;
        }
    }

    function CheckPermissions(requiredPermissions: string[]): MethodDecorator {
        return <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => {
            const hasPermission = requiredPermissions.some(permission => 
                UserLogin.permissions.includes(permission)
            );

            if (!hasPermission) {
                console.error(`Usuário ${UserLogin.username} não tem permissão ${requiredPermissions} para acessar ${String(propertyKey)}`); 
                
                descriptor.value = function() {} as T;
            }

            return descriptor;
        }
    }

    class ShoppingCart {

        @CheckPermissions(['User', 'Admin', 'Super User'])
        @RateLimit(3000)
        getItem() {
            console.log('Retorna a relação de itens adicionados ao carrinho');
        }
    }

    const shoppingCart = new ShoppingCart();
    // shoppingCart.getItem();
    // setInterval(() => {
    //     shoppingCart.getItem();
    // }, 3500);
    document.getElementById('getItems')?.addEventListener('click', () => {
        shoppingCart.getItem();
    })
};