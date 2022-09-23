import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const cartState = createContext()

const Context = ({ children }) => {
    const [cart, setCart] = useState([])
    return (
        <cartState.Provider value={{ cart, setCart }}>{children}</cartState.Provider>
    )
}

export default Context