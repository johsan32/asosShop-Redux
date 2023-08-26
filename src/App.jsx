import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BasketPage from "./pages/BasketPage";
import Header from "./components/Header";
import Products from "./pages/Products";
import { getProducts } from './redux/actions/productActions';
import FavoritePage from "./pages/FavoritePage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getProducts());

  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/favorite" element={<FavoritePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
