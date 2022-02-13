import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Home.module.css'

const Home = () => {
    const navigate = useNavigate();
    const openPrices = () => {
        navigate("/prices");
    }

    const opemMarkets = () => {
        navigate("/markets");
    }
  return (
    <div className={styles.container}>
      <h2>Click the buttons to see their corresponding list</h2>
      <div className={styles.buttonContainer}>
        <button onClick={openPrices} className={styles.button}>Prices</button>
        <button onClick={opemMarkets} className={styles.button}>Markets</button>
      </div>
    </div>
  )
}

export default Home