import React from 'react'
import styles from '../styles/Row.module.css'

const PriceRow = ({price}) => {
  return (
    <tr className={styles.row}>
      <td>{price.currencySymbol}</td>
      <td>{price.id}</td>
      <td>{price.rateUsd}</td>
      <td>{price.symbol}</td>
      <td>{price.type}</td>
    </tr>
  )
}

export default PriceRow