import React from 'react';

import './pagelogic.styles.scss'

const Paginat = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className='pagination'>
        {pageNumbers.map(number => (
          <div key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='ProductList' className='page-link'>
              {number}
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Paginat;