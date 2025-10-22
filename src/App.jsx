import React, { useState } from 'react'
import Header from './Components/Header'
import Productgrid from './Components/Productgrid'
import CartSidebar from './Components/CartSidebar'
import CartItem from './Components/CartItem'

const App = () => {

const [isCartOpen, setIsCartOpen] = useState(false);

const toggleCart = () =>{
  setIsCartOpen(!isCartOpen);
};

  return (
    <div>
      <Header onToggleCart = {toggleCart}/>
      <Productgrid />
      <CartSidebar isOpen = {isCartOpen} onClose={ () => setIsCartOpen(false)} />
      <CartItem />
    </div>
  )
}

export default App
