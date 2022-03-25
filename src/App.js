import { Routes, Route } from "react-router-dom";
import { Home, ProductListing } from "./pages";
import { Footer, NavBar, Toast } from "./components";
import { ToastProvider, FilterProvider } from "./context";
import Mockman from "mockman-js";
const App = () => {
  return (
    <FilterProvider>
      <ToastProvider>
        <Toast />
        <NavBar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/mock" element={<Mockman />} />
          </Routes>
        </div>
        <Footer />
      </ToastProvider>
    </FilterProvider>
  );
};

export default App;
