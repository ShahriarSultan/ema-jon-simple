import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {

    const { img, name, seller, price, stock, features } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>

            <div className="product-item">
                <h4>{name}</h4>
                <p><small>by:{seller}</small></p>
                <p>Price:${price}</p>

                <p><small>Only {stock} items in Stock - Order Soon</small></p>

                <button
                    className="product-btn"
                    onClick={() => props.handleAddProduct(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart} />
                    Add to cart</button>

            </div>


        </div>
    );
};

export default Product;