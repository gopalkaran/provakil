import React from 'react'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts/ postsPerPage); i++) {
      pageNumbers.push(i);
      
  }
  return (
    <nav>
        <ul className='pagination' style={{ display: 'flex', listStyle:'none', justifyContent: 'center'}}>
            {
                pageNumbers.map(number => (
                    <li key={number} className="page-item" style={{border: '1px solid #ccc', padding: '0.5rem 1rem'}}>
                        <a href='#' onClick={() => paginate(number)} className='page-link' style={{textDecoration: 'none' , color: '#2563eb'}}>
                            {number}
                        </a>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default Pagination