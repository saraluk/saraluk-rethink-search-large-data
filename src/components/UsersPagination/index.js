import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import './style.css';

const UsersPagination = ({
  totalResults,
  usersPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];
  const lastPage = Math.ceil(totalResults / usersPerPage);

  for (let i = 1; i <= lastPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <Pagination className='pagination'>
      <Pagination.First onClick={() => setCurrentPage(1)} />
      {pageNumbers.map((number) => {
        console.log(number);
        if (number >= currentPage - 4 && number <= currentPage + 4) {
          return (
            <Pagination.Item
              key={number}
              onClick={() => setCurrentPage(number)}
              active={number === currentPage}
            >
              {number}
            </Pagination.Item>
          );
        }
        return null;
      })}
      <Pagination.Last onClick={() => setCurrentPage(lastPage)} />
    </Pagination>
  );
};

export default UsersPagination;
