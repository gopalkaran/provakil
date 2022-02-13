import React, {useEffect, useState} from 'react'
import axios from 'axios';
import PriceTable from './PriceTable';
import Pagination from './Pagination';

const Prices = () => {
    const [prices, setPrices] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(20)
    useEffect(() => {
        fetchItems();
      }, []);
    
      const fetchItems = async () => {
        setLoading(true);
        axios
          .get("https://api.coincap.io/v2/rates")
          .then(function (response) {
            console.log(response.data.data);
            setPrices(response.data.data)
            setLoading(false);
          })
          .catch(function (error) {
            console.log(error);
          });
      };

      // Get current posts
      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPrices = prices.slice(indexOfFirstPost, indexOfLastPost)

      // Change Page
      const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
  return (
    <div style={{display: 'grid'}}>
        <input type='search' />
        <PriceTable prices={currentPrices} loading={loading} />
        <Pagination postsPerPage={postsPerPage} totalPosts={prices.length} paginate={paginate} />
    </div>
  )
}

export default Prices