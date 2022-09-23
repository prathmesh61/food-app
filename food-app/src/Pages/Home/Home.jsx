import React, { useContext } from 'react'
import { cartState } from '../../components/Context/Context'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import SingleProduct from '../../components/SingleProduct/SingleProduct'
import './Home.css'
import { menuItemsData } from '../../components/common/data'

const Home = () => {
    const { cart, setCart } = useContext(cartState)
    return (
        <>
            <Header />
            <Hero />
            <div className="productContainer container">
                {menuItemsData.map((prod) => (

                    <SingleProduct prod={prod} key={prod.id} />
                ))}
            </div>
        </>
    )
}

export default Home