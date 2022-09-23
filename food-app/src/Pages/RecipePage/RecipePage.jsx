import React, { useContext } from 'react'
import './RecipePage.css'
import { menuItemsData } from '../../components/common/data'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { cartState } from '../../components/Context/Context'
import Header from '../../components/Header/Header'


const RecipePage = () => {
    const { cart, setCart } = useContext(cartState)

    const { name } = useParams()
    const [recipe] = useState(menuItemsData)
    // const data = menuItemsData
    console.log(recipe);
    return (
        <>
            <Header />
            <div className="recipe_wrapper container" >
                {recipe.filter((r) => r.name === name).map((rec) => (
                    <div className="recipe">
                        <div className="recipe_left">
                            <img src={rec.img} />
                        </div>
                        <div className="recipe_right">
                            <span className="title">{rec.name}</span>
                            <span className="dec">{rec.info}..</span>
                            <div className="recipe_cta">
                                <span className="price">${rec.price}</span>
                                {cart.includes(rec) ? (
                                    <button className='recipe_cta' onClick={() => { setCart(cart.filter((c) => c.id !== rec.id)) }}>Remove</button>
                                ) : (
                                    <button className='recipe_cta' onClick={() => { setCart([...cart, rec]) }}>Add+</button>
                                )}
                            </div>
                        </div>
                    </div>

                ))}

            </div>

        </>

    )
}

export default RecipePage