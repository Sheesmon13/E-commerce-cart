import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./Store/store"; // ✅ correct path
import Header from "./Components/Header";
import ProductGrid from "./Components/ProductGrid";
import CartSidebar from "./Components/CartSidebar";
import CartItem from "./Components/CartItem";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <Provider store={store}>
      <Header onToggleCart={toggleCart} />
      <ProductGrid />
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <CartItem />
    </Provider>
  );
};

export default App;
