import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {NavLink} from "react-router-dom"
import  {ShoppingCart,Storefront}  from "phosphor-react"
import{useState} from "react"
//import Navbar from './Navbar';

import Shop from  './Shop'
import Cart from  './Cart'
import product1  from "./productviews/ashTopfinal.png"
import product2  from "./productviews/blackTopfinal.png"
import product3  from "./productviews/BlueTopfinal.png"
import product4  from  "./productviews/whiteTopfinal.png"
import Footer from './Footer';

function App() {
const[items,setItems]=useState(
  [{id:1, name:"ash shirt,cream troussers,brown shoes", price:100, productImage:product1 ,desc:"look chic and strike a balance between formal and chilling out"},
    {id:2, name:"black top,grey troussers,white footwear", price:300, productImage:product2,desc:"cant go wrong on a black shirt.A date or the cinema"},
    { id:3, name:"blue top,black troussers,brown footwear", price:200, productImage:product3,desc:"look chic and strike a balance between formal and chilling out"},
    { id:4, name:"white top,grey troussers and brown shoes", price:200,productImage:product4,desc:"step into the board meeting and ask them:who is boss?"}]
)
const[cartItems,setCartItems]=useState({1:0,2:0,3:0,4:0}) //initial value of each id of item is 0 in cart
console.log(cartItems)

const addToCart=(x)=>{
  setCartItems((prev)=>({...prev,[x]:prev[x]+1}))

}


function removeFromCart(x){
  setCartItems((prev)=>({...prev,[x]:prev[x]-1}))

}

function updateRandomCount(newAmount,x){
  setCartItems(prev=>({...prev,[x]:newAmount}))
  }

  function getTotalCartAmount(){
    let totalAmount=0
    for(const key in cartItems){
      if(cartItems[key]>0){
        let itemInfo=items.find((item)=>item.id===Number(key))
        totalAmount+=cartItems[key] * itemInfo.price
      }
    }
    return totalAmount
  }



  return (
    <div className="App">
      <Router>
      <header>
        <nav>
          <NavLink to ="/"><Storefront size={48}/></NavLink>
          <NavLink to ="Cart"><ShoppingCart size={48}/></NavLink>
        </nav>
        
      </header>
      <main>
<Routes>

<Route index   element={<Shop  items={items}   addToCart={addToCart}  cartItems={cartItems} />} />



<Route path="/Cart"  element={<Cart  items={items}  cartItems={cartItems} addToCart={addToCart}
 updateRandomCount={updateRandomCount} removeFromCart={removeFromCart} getTotalCartAmount={getTotalCartAmount} />}/>
</Routes>
</main>
</Router>
<Footer/>
      
    </div>
  );
}

export default App;

