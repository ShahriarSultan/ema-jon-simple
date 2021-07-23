import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.price, 0);

    let shipping = 0;
    if (total > 100) {
        shipping = 0;

    }

    else if (total > 50) {
        shipping = 2.99;

    }
    else if (total > 50) {
        shipping = 6.99

    }
    else if (total > 0) {
        shipping = 6.99;
    }
    const tax = total / 10;
    const grandtotal = total + shipping + tax;
    const formatNumber = num => {
        const precision = num.toFixed(2)
        return Number(precision)
    }
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Items ordered:{cart.length}</p>
            <p>Shipping Cost:{shipping}</p>
            <p>Vat+Tax:{formatNumber(tax)}</p>
            <p>Toral Price:{formatNumber(grandtotal)}</p>
        </div>
    );
};

export default Cart;