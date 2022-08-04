import React from 'react';
import './Products.css';
import data from '../../back/Data/Data';

function Products({ handleAddProduct }) {
  const { productItems } = data;

  console.log(productItems);
  return (
    <div className='products'>
      {productItems.map((productItem) => (
        <div className='card' key={productItem.id}>
              <div>
            <img className='product-image' src={productItem.image} alt={productItem.name} key={productItem.id} />
              </div>

              <div>
                  <h3 className='product-name'>{productItem.name}</h3>
              </div>

              <div className='product-price'>
                  ${productItem.price}
              </div>

              <div>
                  <button className='product-add-button' onClick={()=>handleAddProduct(productItem)}> Add To Cart</button>
              </div>
              
        </div>
    ))}
    </div>
  )
}

export default Products