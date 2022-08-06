import OrderItem from "assets/components/OrderItem";
import OrderItemList from "assets/components/OrderItemList";
import * as S from "./style";


const OrderConfirmation = () => {
    return (
        <S.OrderConfirmation>
            <S.OrderConfirmationHead>Confirmação</S.OrderConfirmationHead>
            <S.OrderConfirmationSub>Detalhes do pedido</S.OrderConfirmationSub>
            <OrderItemList
                list={<OrderItem />}
                footer={
                    <S.OrderConfirmationFooter>
                        <S.OrderConfirmationFooterRow>
                            <span>Subtotal</span>
                            <span>R$ 150.00</span>
                        </S.OrderConfirmationFooterRow>
                    </S.OrderConfirmationFooter>
                } />
        </S.OrderConfirmation>
    );
}

export default OrderConfirmation;