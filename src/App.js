import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import AllProducts from "./Pages/AllProducts";
import Cart from "./Pages/User/Cart";


function App() {
  return (
    <div className="App">
      
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<AllProducts />} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
      <Footer />
  
    </div>
  );
}

export default App;
