import { useState } from 'react'
import './App.css'
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Cartpage from './Pages/CartPage/Cartpage';
import Header from './components/Header/Header';
import RecipePage from './Pages/RecipePage/RecipePage';

const App = () => {
  const { id } = useParams()

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route index path='/' element={<Home />} />
          <Route path='/Cart' element={<Cartpage />} />
          <Route path='/recipe/:name' element={<RecipePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
