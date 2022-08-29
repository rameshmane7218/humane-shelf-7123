import { Container } from "@chakra-ui/react";
import { Routes, Route, useLocation } from "react-router-dom";
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
import Profile from "./pages/Profile";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();
  // useEffect(() => {
  //   console.log(location);
  // }, [location]);
  return (
    <Container className="App" maxW={"none"} p={0}>
      <nav>
        <Navbar />
      </nav>
      <Auth />

      <Container
        style={{ padding: "20px 0 0 0" }}
        maxW="container.xl"
        mt={"120px"}
        boxSizing="border-box"
        // display={"none"}
      >
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/address-page" element={<Address />} />
          <Route path="/cart/summary-page" element={<OrderSummary />} />
          {/* <Route path="/auth" element={<Auth />} /> */}
          <Route path="/payment" element={<Payment />} />
          {/* <Route path="/products" element={<Products />} /> */}
          <Route path="/products" element={<ProductNew />} />

          <Route path={`/products/:id`} element={<SingleProd />} />
        </Routes>
      </Container>

      {(pathname == "/" ||
        pathname == "/profile" ||
        pathname == "/products") && (
        <footer>
          <Footer />
        </footer>
      )}
    </Container>
  );
}

export default App;
