
import { useState } from 'react'
import './App.css'
import Cart from './Cart/Cart'
import Header from './Header/Header'
import Products from './Products/PRoducts'

function App() {
  const [cart, setCart] = useState([])

  const handleCartBtn = (product)=>{
    const isExist = cart.find((p)=> p.id === product.id);
    if(!isExist){
      const newCart = [...cart, product];
      setCart(newCart)
    }
    else{
      alert("You already Select this Product. Plz Try Another One!")
    }
    
  }


  const handleRemoveBtn = (id)=> {
    const newCart = cart.filter((element)=> element.id !== id)
    setCart(newCart)
  }



  return (
    <>
      <Header></Header>
      <main>
        <div className='container'>
          <div className='main-product-and-cart'>
          <Products handleCartBtn={handleCartBtn}></Products>
          <Cart cart={cart} handleRemoveBtn={handleRemoveBtn}></Cart>
          </div>
        </div>
      </main>

    </>
  )
}

export default App
