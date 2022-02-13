import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";
import Pagination from "./Pagination";

const Markets = () => {
  const [searchText, setSearchText] = useState('')
  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setLoading(true);
    axios
      .get("https://api.coincap.io/v2/markets")
      .then(function (response) {
        console.log(response.data.data);
        setMarkets(response.data.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const slicedMarkets = markets.slice(indexOfFirstPost, indexOfLastPost);
  const [currentMarkets, setCurrentMarkets] = useState([])


  const onChangeHandler = (e) => {
    setSearchText(e.target.value)
  }


 useEffect(()=>{
    if(searchText !== ""){
      const searchResults = slicedMarkets.filter(market => market.baseId.includes(searchText.toLowerCase()))
      setCurrentMarkets(searchResults)
    }
 }, [searchText])

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <input type="search" onChange={onChangeHandler} />
      <Table markets={searchText.length < 1 ? slicedMarkets : currentMarkets} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={markets.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Markets;
