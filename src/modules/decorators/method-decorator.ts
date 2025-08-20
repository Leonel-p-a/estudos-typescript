export const bootstrap = (): void => {
    const UserLogin = {
        username: 'Leonel',
        permissions: ['User'],
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
        getItem() {
            console.log('Retorna a relação de iens adicionados ao carrinho');
        }

        // @CheckPermissions(['Admin', 'Super User'])
        deleteItem() {
            console.log('Remove um item do carrinho');
        }
    }

    const shoppingCart = new ShoppingCart();
    shoppingCart.getItem();
    // shoppingCart.deleteItem();
};