import React from 'react';

import Pagination from '@material-ui/lab/Pagination';
  
const PaginationMain = () => {
  return (
    <div style={{ display: 'block', padding: 30, marginTop: 40, marginLeft: 800 }}>
      <Pagination count={3} variant="outlined" color="primary" />
    </div>
  );
};

export default PaginationMain;

