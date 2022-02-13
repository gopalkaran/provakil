import React from 'react'
import styles from '../styles/Row.module.css'

const Row = ({market}) => {
  return (
    <tr className={styles.row}>
      <td>{market.baseId}</td>
      <td>{market.baseSymbol}</td>
      <td>{market.exchangeId}</td>
      <td>{market.percentExchangeVolume}</td>
      <td>{market.priceQuote}</td>
      <td>{market.priceUsd}</td>
      <td>{market.quoteId}</td>
      <td>{market.quoteSymbol}</td>
      <td>{market.rank}</td>
      <td>{market.tradesCount24Hr}</td>
      <td>{market.updated}</td>
      <td>{market.volumeUsd24Hr}</td>
    </tr>
  )
}

export default Row