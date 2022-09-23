import React, { useContext } from 'react'
import './Header.css'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { cartState } from '../Context/Context'

const Header = () => {
    const { cart, setCart } = useContext(cartState)

    return (
        <header className='header container'>
            <div className="header_wrapper ">
                <div className="header_logo">
                    <Link to='/'>
                        <img src="https://media.istockphoto.com/vectors/young-man-cutting-vegetables-vector-id1175651928?k=20&m=1175651928&s=612x612&w=0&h=zQNqH-_GtltrBamX6JA9-PwxuYLOsVN7_nb9ZjD7_cE=" alt="" />

                    </Link>
                    <span>Meals</span>
                </div>
                <div className="header_icon">
                    <Link to='/cart'><FaShoppingCart size={25} /><sup>{cart.length}</sup></Link>
                    <Link to='/'>
                        <img className='user_icon' src="https://restaurantapp-c2ed6.web.app/static/media/avatar.68cdc4513e601d28a382.png" alt="" />

                    </Link>
                </div>

            </div>
        </header>
    )
}

export default Header