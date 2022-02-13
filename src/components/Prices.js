import React, { useEffect, useState } from "react";
import axios from "axios";
import PriceTable from "./PriceTable";
import Pagination from "./Pagination";
import styles from "../styles/Prices.module.css"

const Prices = () => {
  const [searchText, setSearchText] = useState('')
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setLoading(true);
    axios
      .get("https://api.coincap.io/v2/rates")
      .then(function (response) {
        console.log(response.data.data);
        setPrices(response.data.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const slicedPrices = prices.slice(indexOfFirstPost, indexOfLastPost);
  const [currentPrices, setCurrentPrices] = useState([])

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const onChangeHandler = (e) => {
     setSearchText(e.target.value)
  }

  useEffect(()=>{
    if(searchText !== ""){
     const searchResults = slicedPrices.filter(price => price.id.includes(searchText.toLowerCase()))
     setCurrentPrices(searchResults)
    }
  }, [searchText])

  return (
    <div className={styles.container}>
      <input type="search" onChange={onChangeHandler} placeholder='Search by id' style={{padding: '0.5rem 1rem', width: '20rem', fontSize: '1.1rem'}} />
      <PriceTable prices={searchText.length < 1 ? slicedPrices : currentPrices} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={prices.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Prices;
