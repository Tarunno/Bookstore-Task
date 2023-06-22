import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/indexPage';
import Header from './components/Header';
import AddPage from './pages/addPage';
import { useEffect, useState } from 'react';
import { GetCart } from './api/books';
import Cart from './components/Cart';


const App = () => {

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const handleCart = async() =>{
    const data = await GetCart()
    let temp = []
    for(let i=0; i<data.length; i++){
      if(data[i] != null){
        temp.push(data[i])
      }
    }
    setCart(temp)
  } 

  useEffect(() => {
    handleCart()
  }, [])

  return (
    <div className="App">
      <Header cart={cart} setShowCart={setShowCart}/>
      <div>
        <Routes>
          <Route path='' element={<IndexPage setCart={setCart}/>}/>
          <Route path='/add' element={<AddPage />}/>
        </Routes>
      </div>
      {showCart && <Cart cart={cart} setCart={setCart} setShowCart={setShowCart}/>}
    </div>
  );
}

export default App
