import { Routes, Route } from "react-router-dom";
import {
  Home,
  ProductListing,
  Cart,
  Wishlist,
  Login,
  Signup,
  Profile,
  Checkout,
} from "./pages";
import {
  Address,
  Footer,
  NavBar,
  OrderHistory,
  Toast,
  UserInfo,
} from "./components";
import {
  ToastProvider,
  FilterProvider,
  CartProvider,
  AuthProvider,
  OrderProvider,
} from "./context";
import Mockman from "mockman-js";
import { RequiresAuth } from "./components/Auth/RequiresAuth";
const App = () => {
  return (
    <AuthProvider>
      <OrderProvider>
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
                  <Route
                    path="/user"
                    element={
                      <RequiresAuth>
                        <Profile />
                      </RequiresAuth>
                    }
                  >
                    <Route
                      index
                      element={
                        <RequiresAuth>
                          <UserInfo />
                        </RequiresAuth>
                      }
                    />
                    <Route
                      path="addresses"
                      element={
                        <RequiresAuth>
                          <Address />
                        </RequiresAuth>
                      }
                    />
                    <Route
                      exact
                      path="order-history"
                      element={
                        <RequiresAuth>
                          <OrderHistory />
                        </RequiresAuth>
                      }
                    />
                  </Route>
                  <Route
                    path="/checkout"
                    element={
                      <RequiresAuth>
                        <Checkout />
                      </RequiresAuth>
                    }
                  />
                </Routes>
              </div>
              <Footer />
            </ToastProvider>
          </FilterProvider>
        </CartProvider>
      </OrderProvider>
    </AuthProvider>
  );
};

export default App;
