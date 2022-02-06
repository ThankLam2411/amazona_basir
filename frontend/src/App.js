import { data } from "./data";
import React from "react";
const App =()=>{
 return(
 <div className="grid-container">
  <header className="row">
    <div>
      <a className="brand" href="index.html">amazona</a>
    </div>
    <div>
      <a href="/cart">Cart</a>
      <a href="/signin">Sign In</a>
    </div>
  </header>
  <main>
    <div className="row center">
      {
      data.products.map((product) =>(
        <div key={product._id} className="card">
          <a href={`/product/${product._id}`}>
            {/* image sz: 680px by 830px */}
            <img className="medium" src={product.image} alt={product.name} />
          </a>
          <div className="card-body">
          <a href={`/product/${product._id}`}>
              <h2>{product.name}</h2>
            </a>
            <div className="rating">
              <span> <i className="fa fa-star" /> </span>
              <span> <i className="fa fa-star" /> </span>
              <span> <i className="fa fa-star" /> </span>
              <span> <i className="fa fa-star" /> </span>
              <span> <i className="fa fa-star" /> </span>
            </div>
            <div className="price">
              <h1>{product.price}$</h1>
            </div>
          </div>
        </div>
        ))
      }
    </div>
     
        
     
  </main>
  <footer className="row center">All right reserved</footer>
</div>

 )
}
export default App;