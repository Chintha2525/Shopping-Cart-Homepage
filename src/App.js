
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from './Card';
import Cart from './Cart';
import { useState } from 'react';
function App() {
  const [products] = useState([
    { id: 1,
      name: "Royal Enfield Classic 350",
      Price: 149900,
      quantity:1,
      img: "https://imgd.aeplcdn.com/310x174/n/cw/ec/101487/classic-350-right-front-three-quarter-6.jpeg?isig=0&q=80"
    },
    {
      id: 2,
      name: "Royal Enfield Bullet 350",
      Price: 150893,
      quantity:1,
      img: "https://imgd.aeplcdn.com/393x221/n/cw/ec/136951/bullet-right-front-three-quarter-3.png?isig=0&q=75"
    },
    {
      id: 3,
      name: "Royal Enfield Continental GT 650",
      Price: 305624,
      quantity:1,
      img: "https://imgd.aeplcdn.com/310x174/n/cw/ec/49656/continental-gt-right-front-three-quarter-2.png?isig=0&q=80"
    },
    {
      id: 4,
      name: "Royal Enfield Continental GT 450",
      Price: 300000,
      quantity:1,
      img: "https://imgd.aeplcdn.com/393x221/n/cw/ec/138835/continental-gt-450-right-front-three-quarter.jpeg?isig=0&q=75"
    },
    { 
      id: 5,
      name: "Royal Enfield Meteor 350",
      Price: 200926,
      quantity:1,
      img: "https://imgd.aeplcdn.com/393x221/n/cw/ec/1/versions/royalenfield-meteor-350-fireball1671524242204.jpg?q=75"
    },
    {
      id: 6,
      name: "Royal Enfield Himalayan",
      Price: 215869,
      quantity:1,
      img: "https://imgd.aeplcdn.com/393x221/n/cw/ec/1/versions/royalenfield-himalayan-standard---bs-vi-[2021]1671525507212.jpg?q=75"
    },
    {
      id: 7,
      name: "Royal Enfield Super Meteor 650",
      Price: 348900,
      quantity:1,
      img:"https://imgd.aeplcdn.com/393x221/n/cw/ec/108885/super-meteor-650-right-front-three-quarter-2.jpeg?isig=0&q=75"
    },
    {
      id: 8,
      name: "Royal Enfield Interceptor 650",
      Price: 288107,
      quantity:1,
      img: "https://imgd.aeplcdn.com/393x221/n/cw/ec/49657/interceptor-right-front-three-quarter-16.png?isig=0&q=75"
    },
    
  ]) 
  const [cartItems,setCartItems] = useState([])
  let addToCart = (product) =>{
     setCartItems([...cartItems,product])
  }
  let removeFromCart = (product) =>{
   const indexVal= cartItems.findIndex(obj => obj.id === product.id);
   cartItems.splice(indexVal,1);
   setCartItems([...cartItems])
  }
  return (<>
    <header className="bg-dark py-5">
    <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
            <h2 className="display-4 fw-bolder"><b>ROYAL ENFIELD</b></h2>
            <p className="lead fw-normal text-white-50 mb-0">Attitude initiates with a hard kick</p>
        </div>
    </div>
</header>
    <div className='container py-5'>
      <div className='row'>
        <div className='col-lg-8'>
          <div className='row'>
         {
         products.map((product,index)=>
         {
          return <Card key={index} product={product} addToCart={addToCart} cartItems={cartItems}/>
         }) 
         }
          </div>
        </div>
        <div className='col-lg-4'>
         <h3>Cart</h3>
         <Cart cartItems={cartItems} removeFromCart={removeFromCart} setCartItems={setCartItems}/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;