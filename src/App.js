import { Routes, Route } from "react-router-dom";
import { Home, ProductListing, Cart, Wishlist, Login, Signup } from "./pages";
import { Footer, NavBar, Toast } from "./components";
import {
  ToastProvider,
  FilterProvider,
  CartProvider,
  AuthProvider,
} from "./context";
import Mockman from "mockman-js";
import { RequiresAuth } from "./components/Auth/RequiresAuth";
const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <FilterProvider>
          <ToastProvider>
            <Toast />
            <NavBar />
            <div className="App">
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/products" element={<ProductListing />} />

                <Route
                  path="/cart"
                  element={
                    <RequiresAuth>
                      <Cart />
                    </RequiresAuth>
                  }
                />
                <Route
                  path="/wishlist"
                  element={
                    <RequiresAuth>
                      <Wishlist />
                    </RequiresAuth>
                  }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/mock" element={<Mockman />} />
              </Routes>
            </div>
            <Footer />
          </ToastProvider>
        </FilterProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
