import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <main className='hero container'>
            <div className="hero_wrapper">
                <div className="hero_left">
                    <span>Bike Delivery</span>
                    <h1>The Fastest Delivery in <br />Your City</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima velit eaque fugit </p>
                    <button>Buy Now!</button>
                </div>
                <div className="hero_right">
                    <img src="https://media.istockphoto.com/vectors/young-man-cutting-vegetables-vector-id1175651928?k=20&m=1175651928&s=612x612&w=0&h=zQNqH-_GtltrBamX6JA9-PwxuYLOsVN7_nb9ZjD7_cE=" alt="" className="hero_img" />
                </div>
            </div>
        </main>
    )
}

export default Hero