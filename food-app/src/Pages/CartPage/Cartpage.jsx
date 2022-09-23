import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { cartState } from '../../components/Context/Context'
import Header from '../../components/Header/Header'
import SingleProduct from '../../components/SingleProduct/SingleProduct'
import './Cartpage.css'

const Cartpage = () => {
    const { cart, setCart } = useContext(cartState)
    const [total, setTotal] = useState([])

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
    }, [cart])

    return (
        <section className='cart container'>
            <Header />
            <h2 className="cart_title">My Cart</h2>
            <span className="cart_total">Your Cart Total: ${total}</span>
            <div className="productContainer">
                {cart.map((prod) => (
                    <SingleProduct
                        prod={prod}
                        key={prod.id}
                    />
                ))}
            </div>
        </section>
    )
}

export default Cartpage