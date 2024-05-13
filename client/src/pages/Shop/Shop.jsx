import ProductList from "../../components/ProductList";
import CategoryMenu from "../../components/CategoryMenu";
import Cart from "../../components/Cart";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Shop;
