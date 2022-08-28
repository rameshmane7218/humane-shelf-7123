import { Container } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Auth from "./components/Navbar/Auth";

import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import Products from "./pages/Products";

import Address from "./pages/Address";
import OrderSummary from "./pages/OrderSummary";

import SingleProd from "./components/Products/SingleProd";
import ProductNew from "./pages/ProductNew";

function App() {
  return (
    <Container className="App" maxW={"none"} p={0}>
      <nav>
        <Navbar />
      </nav>

      <Container
        style={{ padding: "20px 0 0 0" }}
        maxW="container.xl"
        mt={"120px"}
        boxSizing="border-box"
        // display={"none"}
      >
        <Routes>
          <Route path="/" element={<Home />} />
        
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/address-page" element={<Address />} />
          <Route path="/cart/summary-page" element={<OrderSummary />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/payment" element={<Payment />} />
          {/* <Route path="/products" element={<Products />} /> */}
          <Route path="/products" element={<ProductNew />} />

          <Route path={`/products/:id`} element={<SingleProd />} />
        </Routes>
      </Container>

      <footer><Footer/></footer>
    </Container>
  );
}

export default App;
