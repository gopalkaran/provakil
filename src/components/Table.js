import React from 'react'
import Row from './Row'
import styles from '../styles/Table.module.css'

const Table = ({markets, loading}) => {
  if(loading){
    return <h2>Loading...</h2>
  }
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Base Id</th>
          <th>Base Symbol</th>
          <th>Exchange Id</th>
          <th>Percent Exchange Volume</th>
          <th>Price Quote</th>
          <th>Price USD</th>
          <th>Quote Id</th>
          <th>Quote Symbol</th>
          <th>Rank</th>
          <th>Trades Count 24Hr</th>
          <th>Updated</th>
          <th>Volume USD 24Hr</th>
        </tr>
      </thead>
      <tbody>
      {
      markets.map(market => {
        return <Row key={market.baseId}  market={market} />
      })
      }
      </tbody>
    </table>
  )
}

export default Table
