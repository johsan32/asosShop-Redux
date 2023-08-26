import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const { productState, basketState, favoriteState } = useSelector((store) => ({
    productState: store.productState,
    basketState: store.basketState,
    favoriteState: store.favoriteState,
  }));

console.log(productState, basketState, favoriteState);

  return (
    <div>
      {productState.isLoading && <Loading />}
      <div className="container">
       {!productState.isLoading && <h1 className="text-center mt-3">Shop Products</h1>} 
        <div className="row row-cols-1 row-cols-md-4 g-3 mt-1">
          {productState.products.map((item) => (
            <ProductCard key={item.id} item={item} favorite ={favoriteState} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
