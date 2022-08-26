import ButtonLarge from "../ButtonLarge";
import ButtonToggle from "../ButtonToggle";
import OrderItem from "../OrderItem";
import OrderItemList from "../OrderItemList";
import { HTMLAttributes, useEffect, useState } from "react";
import { OrderItemType } from "types/OrderItemType";
import { OrderType } from "types/orderType";
import * as S from "./style";

type OrderDetailsType = HTMLAttributes<HTMLDivElement>;

type OrderDetailsProps = {
  orders: OrderItemType[];
  selectedTable?: number | string;
  onProceedToPayment: () => void;
  onOrdersChange: (orders: OrderItemType[]) => void;
  onChangeActiveOrderType: (data: OrderType) => void;
  onRemoveItem: (id: string) => void;
  activeOrderType: OrderType;
} & OrderDetailsType;

const OrderDetails = ({
  orders,
  onProceedToPayment,
  onOrdersChange,
  onChangeActiveOrderType,
  onRemoveItem,
  activeOrderType,
  selectedTable,
}: OrderDetailsProps) => {
  const price = orders
    .map((i) => i.product.price * i.quantity)
    .reduce((a, b) => a + b, 0);

  const [priceState, setPriceState] = useState(price);

  const disabledButton =
    !Boolean(orders.length) ||
    !Boolean(selectedTable) ||
    selectedTable === "default";

  const handleChange = (data: OrderItemType) => {
    const list = orders.map((item) =>
      item.product.id === data.product.id ? data : item
    );

    onOrdersChange(list);
  };

  useEffect(() => {
    setPriceState(price);
  }, [orders, price]);

  return (
    <S.OrderDetails>
      <S.OrderDetailsTitle>Detalhes do Pedido</S.OrderDetailsTitle>
      <S.OrderDetailsButtonGroup>
        <ButtonToggle
          onClick={() => onChangeActiveOrderType(OrderType.COMER_NO_LOCAL)}
          active={activeOrderType === OrderType.COMER_NO_LOCAL}
          value="Comer no Local"
        />
        <ButtonToggle
          onClick={() => onChangeActiveOrderType(OrderType.PARA_VIAGEM)}
          active={activeOrderType === OrderType.PARA_VIAGEM}
          value="P/ Viagem"
        />
        <ButtonToggle
          onClick={() => onChangeActiveOrderType(OrderType.DELIVERY)}
          active={activeOrderType === OrderType.DELIVERY}
          value="Delivery"
        />
      </S.OrderDetailsButtonGroup>
      <S.OrderDetailsList>
        <OrderItemList
          header={
            <S.OrderDetailsListTitle>
              <h4>Item</h4>
              <h4>Qtd</h4>
              <h4>Preço</h4>
            </S.OrderDetailsListTitle>
          }
          list={
            Boolean(orders.length) ? (
              orders.map((item, index) => (
                <OrderItem
                  onItemChange={handleChange}
                  onRemoveItem={() => onRemoveItem(item.product.id)}
                  product={item.product}
                  quantity={item.quantity}
                  observation={item.observation}
                  key={`OrderDetails-${index}`}
                />
              ))
            ) : (
              <S.OrderDetailsListGap />
            )
          }
          footer={
            <S.OrderDetailsListFooter>
              <S.OrderDetailsListFooterRow>
                <span>Subtotal</span>
                <span>R$ {priceState.toFixed(2)}</span>
              </S.OrderDetailsListFooterRow>
              {(!Boolean(selectedTable) || selectedTable === "default") && (
                <S.OrderDetailsListFooterWarning>
                  Escolha a mesa primeiro
                </S.OrderDetailsListFooterWarning>
              )}
              <ButtonLarge
                onClick={onProceedToPayment}
                disabled={disabledButton}
                value="Continue para o pagamento"
              />
            </S.OrderDetailsListFooter>
          }
        />
      </S.OrderDetailsList>
    </S.OrderDetails>
  );
};

export default OrderDetails;