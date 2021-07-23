import React from 'react';
import { useState } from 'react/cjs/react.development';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import Product from '../Product/Product';
import './Shop.css'

const Shop = (props) => {
    const first10 = fakeData.slice(0, 15);
    const [products, useProducts] = useState(first10);

    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {

        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">

                {
                    products.map(pd => <Product
                        handleAddProduct={handleAddProduct}
                        product={pd}
                    ></Product>)
                }



            </div>

            <div className="cart-container">

                <Cart cart={cart}></Cart>
            </div>

        </div>

    );
};

export default Shop;