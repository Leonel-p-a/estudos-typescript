export const bootstrap = (): void => {
    enum OrderStatus {
        PENDING, // default = 0
        DELIVERED = 'Entregue',
        CANCELED = 'Cancelado' // Poderia ser numérico ou outro tipo
    }

    console.log(OrderStatus);
    console.log(OrderStatus.DELIVERED); // Entregue
    console.log(OrderStatus['DELIVERED']); // Entregue

    enum OrderStatus {
        WAITINGFORPAYMENT = 500,
        SENT = 'Enviado'
    }

    function changeOrderStatus(newStatus: OrderStatus): void {
        if(newStatus === OrderStatus.SENT) {
            // ... ENVIAR EMAIL PARA CLIENTE
            console.log('Novo Status: ', newStatus);
        }
    }

    changeOrderStatus(OrderStatus.SENT);
};