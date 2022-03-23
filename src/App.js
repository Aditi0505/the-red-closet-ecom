import { Routes, Route } from "react-router-dom";
import { Home, ProductListing } from "./pages";
import { Footer, NavBar, Toast } from "./components";
import { ToastProvider } from "./context/toast-context";
import Mockman from "mockman-js";
const App = () => {
  return (
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
  );
};

export default App;
