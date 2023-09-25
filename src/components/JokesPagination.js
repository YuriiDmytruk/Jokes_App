import React from 'react';
import { Pagination } from 'react-bootstrap';

import { Footer } from './styled/JokesPagination';

export default function JokesPagination(props) {
  const onPageChange = (page) => {
    props.setPage(page);
  };

  const createPaginationItems = () => {
    let paginationItems = [];
    for (
      let i = 0;
      i <= Math.floor(props.jokesLength / (props.JOKES_ON_PAGE + 1));
      i++
    ) {
      paginationItems.push(
        <Pagination.Item
          onClick={() => {
            onPageChange(i + 1);
          }}
          value={i + 1}
          active={props.page === i + 1}
          key={i + 1}
        >
          {i + 1}
        </Pagination.Item>
      );
    }
    return paginationItems;
  };

  const onNextClick = () => {
    if (
      props.page !==
      Math.floor(props.jokesLength / (props.JOKES_ON_PAGE + 1)) + 1
    ) {
      onPageChange(props.page + 1);
    }
  };

  const onPrevClick = () => {
    if (props.page !== 1) {
      onPageChange(props.page - 1);
    }
  };

  return (
    <Footer>
      <Pagination className="justify-content-center">
        <Pagination.Prev disable={props.page === 1} onClick={onPrevClick} />
        {createPaginationItems()}
        <Pagination.Next
          disable={
            props.page ===
            Math.floor(props.jokesLength / (props.JOKES_ON_PAGE + 1)) + 1
          }
          onClick={onNextClick}
        />
      </Pagination>
    </Footer>
  );
}
