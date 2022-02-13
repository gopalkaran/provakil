import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";
import Pagination from "./Pagination";

const Markets = () => {
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
  const currentMarkets = markets.slice(indexOfFirstPost, indexOfLastPost);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <input type="search" />
      <Table markets={currentMarkets} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={markets.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Markets;
