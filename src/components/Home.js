import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const openPrices = () => {
        navigate("/prices");
    }

    const opemMarkets = () => {
        navigate("/markets");
    }
  return (
    <div>
        <button onClick={openPrices}>Prices</button>
        <button onClick={opemMarkets}>Markets</button>
    </div>
  )
}

export default Home