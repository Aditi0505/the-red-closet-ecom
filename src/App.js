import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { Footer, NavBar } from "./components";
const App = () => {
  return (
    <>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
