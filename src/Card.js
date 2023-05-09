function Card({product,addToCart,cartItems}){
    return   <>
<div className='col-lg-4 border mt-2 p-3'>
    <div className='row'>
      <div className='col-lg-12 text-center'>
        <img className='img-fluid' src={product.img} alt='phone'/>
      </div>
      <div className='col-lg-12 text-center'>
        <h4>{product.name}</h4>
        <h6>Price: Rs.{product.Price}</h6>
        <button disabled={cartItems.some(obj=>obj.id === product.id)} onClick={()=>{
            addToCart(product)
        }} className='btn btn-sm btn-primary'>
            {
                cartItems.some(obj=>obj.id === product.id) ? "Added to cart" : "Add to cart"
            }
        </button>
      </div>
    </div>
  </div>
</>
}

export default Card