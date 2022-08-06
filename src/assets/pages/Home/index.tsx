import { ReactComponent as Search } from "assets/icons/search.svg";
import * as S from "./style";
import Menu from "assets/components/Menu";
import { RoutePath } from "types/routes";
import { navigationItems } from "assets/data/navigation";
import ProductItemList from "assets/components/ProductItemList";
import { DateTime } from "luxon";
import OrderDetails from "assets/components/OrderDetails";
import Overlay from "assets/components/Overlay";
import CheckoutSection from "assets/components/CheckoutSection";

const Home = () => {
  const dateDescription = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });

  return (
    <S.Home>
      <Menu active={RoutePath.HOME} navItems={navigationItems} />
      <S.HomeContent>
        <header>
          <S.HomeHeaderDetails>
            <div>
              <S.HomeHeaderDetailsLogo>Pizza Fresh</S.HomeHeaderDetailsLogo>
              <S.HomeHeaderDetailsDate>
                {dateDescription}
              </S.HomeHeaderDetailsDate>
            </div>
            <S.HomeHeaderDetailsSearch>
              <Search />
              <input type="text" placeholder="Procure pelo sabor" />
            </S.HomeHeaderDetailsSearch>
          </S.HomeHeaderDetails>
        </header>
        <div>
          <S.HomeProductTitle>
            <b>Pizzas</b>
          </S.HomeProductTitle>
          <S.HomeProductList>
            <ProductItemList children={undefined}></ProductItemList>
          </S.HomeProductList>
        </div>
      </S.HomeContent>
      <aside>
        <OrderDetails />
      </aside>
      <Overlay>
        <CheckoutSection />
      </Overlay>
    </S.Home>
  );
};

export default Home;
