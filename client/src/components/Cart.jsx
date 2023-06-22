import { useEffect, useState } from "react"
import { AddToCart, PlaceOrder } from "../api/books"

const Cart = ({cart, setCart, setShowCart}) => {

  const [totalItems, setTotalItems] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  const handleCart = () => {
    let total_item = 0, total_price = 0
    for(let i=0; i<cart.length; i++){
      if(cart[i] != null){
        total_item  += cart[i]['quentity']
        total_price += cart[i]['quentity'] * cart[i]['price']
      }
    }
    setTotalItems(total_item)
    setTotalPrice(total_price)
  }

  const handleCartQuentity = async(id, action) => {
    const res = await AddToCart(id, action)
    let temp = []
    for(let i=0; i<res.length; i++){
      if(res[i] != null){
        temp.push(res[i])
      }
    }
    setCart(temp)
  }

  const handleOrder = async() => {
    const res = await PlaceOrder(cart, totalItems, totalPrice)
    setCart([])
  }

  useEffect(() => {
    handleCart()
  }, [cart])

  return (
    <div className='bg-white h-screen fixed z-20 top-0 right-0 w-[300px] shadow-2xl py-10 px-6 slide-in'>
      <div className='flex justify-between items-center'> 
        <h1 className="text-[20px] mb-2 font-medium">My cart</h1>
        <svg onClick={() => setShowCart(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-9 h-9 mt-[-15px] cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div className='bg-gray-100 flex justify-between items-start border rounded-xl p-2 w-[235px]'>
        <div>
          <p className='text-[13px] font-medium'>Total items: {totalItems}</p>
          <p className='text-[13px] font-medium'>Total price: {totalPrice}</p>
        </div>
        <button onClick={() => handleOrder()} className='bg-brand font-medium text-[13px] text-white px-2 py-1 my-1 rounded-lg'>Order</button>
      </div>
      <div className="overflow-scroll h-screen pb-12">
        {cart && cart.map(item => (
          <div key={item.id} className='p-2 mb-[-14px]'>
            <p className='text-[13px] font-medium text-white relative top-3 left-[-5px] z-20 h-5 w-5 flex items-center justify-center rounded-full bg-brand'>{item.quentity}</p>
            <div key={item.id} className='flex justify-between w-full h-full gap-1 bg-gray-200 rounded-xl overflow-hidden'>
              <div className='flex gap-1'>
                <div>
                  <img src={'http://localhost:8000/api' + item.image} alt="book cover" className='w-11 h-full object-cover'/>
                </div>
                <div className='p-1'>
                  <p className='text-[15px] font-medium'>{item.name}</p>
                  <p className='text-[11px]'>{item.author}</p>
                </div>
              </div>
              <div className='flex flex-col justify-between h-full p-1'>
                <svg onClick={() => handleCartQuentity(item, 'add')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400 hover:text-gray-800 cursor-pointer transition-colors duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg onClick={() => handleCartQuentity(item, 'remove')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400 hover:text-gray-800 cursor-pointer transition-colors duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart