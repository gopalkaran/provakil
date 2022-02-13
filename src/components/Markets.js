import React,{useState, useEffect} from 'react'
import axios from 'axios';
import Table from './Table';

const Markets = () => {
    const [markets, setMarkets] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(20)
    useEffect(() => {
        fetchItems();
      }, []);
    
      const fetchItems = async () => {
        setLoading(true);
        axios
          .get("https://api.coincap.io/v2/markets")
          .then(function (response) {
            console.log(response.data.data);
            setMarkets(response.data.data)
            setLoading(false);
          })
          .catch(function (error) {
            console.log(error);
          });
      };


            // Get current posts
            const indexOfLastPost = currentPage * postsPerPage;
            const indexOfFirstPost = indexOfLastPost - postsPerPage;
            const currentMarkets = markets.slice(indexOfFirstPost, indexOfLastPost)
    
  return (
    <div>
        <input type='search'  />
        <Table markets={currentMarkets} loading={loading} />
    </div>
  )
}

export default Markets