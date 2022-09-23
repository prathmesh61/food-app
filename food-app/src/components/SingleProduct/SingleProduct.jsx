import React, { useContext } from 'react'
import './SingleProduct.css'
import { menuItemsData } from '../common/data'
import { cartState } from '../Context/Context'
import { Link } from 'react-router-dom'

const SingleProduct = ({ prod }) => {
    const { cart, setCart } = useContext(cartState)

    return (
        <div className='product ' >
            <div className="product_wrapper" >
                <Link to={`/recipe/${prod.name}`}>
                    <img className='product_img' src={prod.img} />
                    <div className="product-info">
                        <span className="title">{prod.name}</span><br />
                        <span className="des">{prod.info}...</span>
                    </div>
                </Link>
                <div className="product_cta">
                    <span className="price">${prod.price}</span>

                    {cart.includes(prod) ? (
                        <button className='addToCart' onClick={() => { setCart(cart.filter((c) => c.id !== prod.id)) }}>Remove</button>
                    ) : (
                        <button className='addToCart' onClick={() => { setCart([...cart, prod]) }}>Add+</button>
                    )}

                </div>
            </div>

        </div>
    )
}

export default SingleProduct