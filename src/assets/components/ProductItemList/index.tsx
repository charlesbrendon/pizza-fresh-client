import * as S from "./style";

interface ProductItemListProps {
    children: React.ReactNode;
  }

const ProductItemList = ({ children }: ProductItemListProps) => {
  return (
    <section>
      <S.ProductItemListHeader>
        <S.ProductItemListHeaderTitle>
          Escolha os sabores
        </S.ProductItemListHeaderTitle>
        <S.ProductItemListHeaderSelect>
          <option value="default">Selecione a mesa</option>
          <option value="">01</option>
          <option value="">02</option>
          <option value="">03</option>
          <option value="">04</option>
        </S.ProductItemListHeaderSelect>
      </S.ProductItemListHeader>
      <S.ProductItemList>
      { children }
    </S.ProductItemList>
    </section>
  );
};

export default ProductItemList;
