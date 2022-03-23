import { Routes, Route } from "react-router-dom";
import { Home, ProductListing } from "./pages";
import { Footer, NavBar, Toast } from "./components";
import { ToastProvider } from "./context/toast-context";
const App = () => {
  return (
    <ToastProvider>
      <Toast />
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
        </Routes>
      </div>
      <Footer />
    </ToastProvider>
  );
};

export default App;
