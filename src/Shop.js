import React from 'react'

const Shop = ({items,addToCart,cartItems}) => {
  return (
    <div className='for-shop'>
     <h1>Steve's Bazaar</h1>
     <p className='the-statement'>Give it to you,just how you like your shirts</p>
     <div  className='for-items'>
        {items.map(item=>(
        <div key={item.id} className="for-sub">
            <h2 className='item_name'>{item.name}</h2>           
        <img src={item.productImage}/>
        <p className='the-price'>price:${item.price}</p>
        <p className='the-des'>{item.desc}</p>
        <button className='addcart' onClick={()=>addToCart(item.id)}>Add to Cart</button>
        {cartItems[item.id]>0 && <>{cartItems[item.id]}</>}
        </div>
        ))}
</div>
     </div>
  )
}

export default Shop