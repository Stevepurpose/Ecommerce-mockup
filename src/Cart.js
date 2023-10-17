import React from 'react'
import {useNavigate}  from "react-router-dom"

const Cart = ({items,cartItems,addToCart,updateRandomCount,removeFromCart,getTotalCartAmount}) => {
 const totalAmount=getTotalCartAmount()
const navigate=useNavigate()
  return (
    <div className='container'>
       {totalAmount>0?
    <div className='checkout'>
       <h1 className='for-carter'>you have the following items in your Cart</h1>
    
    <div className='cart-Items'>
    
      {items.map(item=>{
        if(cartItems[item.id]!==0){
          return <>
           <h2 className='carter-mob'>{item.name}</h2>
          <img src={item.productImage}/>
          
          <p>price:${item.price}</p>
         
          <input value={cartItems[item.id]} onChange={(e)=>updateRandomCount(Number(e.target.value),item.id)}/>
         <div className='controls'>
          <button className='quantify' onClick={()=>removeFromCart(item.id)}>-</button>
          <button className='quantify' onClick={()=>addToCart(item.id)}>+</button>
          </div>
          </>
        }
      }  
    )}
    </div>
      <p>Subtotal: ${totalAmount}</p>
        <button onClick={()=>navigate("/")}>continue shopping</button> {/*we use navigate to set our route*/}  
      </div>
      :
      <div className='when_empty'>
      <h1 className='headmob'>you have no items </h1>
      <button className='alone' onClick={()=>navigate("/")}>continue shopping</button>
      </div>
      }
    </div>
  )
}

export default Cart