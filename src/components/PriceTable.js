import React from 'react'
import PriceRow from './PriceRow'
import styles from '../styles/Table.module.css'

const PriceTable = ({prices, loading}) => {
  return (
    <table className={styles.table}>
    <thead>
      <tr>
        <th>Currency Symbol</th>
        <th>Id</th>
        <th>RateUSD</th>
        <th>Symbol</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
    {
    prices.map(price => {
      return <PriceRow key={price.id}  price={price} />
    })
    }
    </tbody>
  </table>
  )
}

export default PriceTable