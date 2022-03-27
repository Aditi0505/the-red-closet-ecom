import { Routes, Route } from "react-router-dom";
import { Home, ProductListing, Cart } from "./pages";
import { Footer, NavBar, Toast } from "./components";
import { ToastProvider, FilterProvider, CartProvider } from "./context";
import Mockman from "mockman-js";
const App = () => {
  return (
    <CartProvider>
      <FilterProvider>
        <ToastProvider>
          <Toast />
          <NavBar />
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductListing />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/mock" element={<Mockman />} />
            </Routes>
          </div>
          <Footer />
        </ToastProvider>
      </FilterProvider>
    </CartProvider>
  );
};

export default App;
