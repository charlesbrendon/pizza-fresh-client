import Menu from "assets/components/Menu";
import ProductItemList from "assets/components/ProductItemList";
import { navigationItems } from "assets/data/navigation";
import { ReactComponent as Search } from "assets/icons/search.svg";
import { RoutePath } from "types/routes";
import * as S from "./style";
import { DateTime } from "luxon";
import CheckoutSection from "assets/components/CheckoutSection";
import OrderDetails from "assets/components/OrderDetails";
import Overlay from "assets/components/Overlay";
import { useNavigate } from "react-router-dom";
import ProductItem from "assets/components/ProductItem";
import { products } from "assets/mocks/products";
import { ProductResponse } from "types/Product";


const Home = () => {
  const dateDescription = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });
  const navigate = useNavigate();
  const handleNavigation = (path: RoutePath) => navigate(path);
  const handleSelection = (product: ProductResponse) => {};

  return (
    <S.Home>
      <Menu
        active={RoutePath.HOME}
        navItems={navigationItems}
        onNavigate={handleNavigation}
        onLogout={() => navigate(RoutePath.LOGIN)}
      />
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
            <ProductItemList>
              {Boolean(products.length) &&
                products.map((product, index) => (
                  <ProductItem
                    product={product}
                    key={`ProductItem-${index}`}
                    onSelect={handleSelection}
                  />
                ))}
            </ProductItemList>
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
