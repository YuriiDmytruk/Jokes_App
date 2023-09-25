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
      let page = 0;
      page <= Math.floor(props.jokesLength / (props.JOKES_ON_PAGE + 1));
      page++
    ) {
      paginationItems.push(
        <Pagination.Item
          onClick={() => {
            onPageChange(page + 1);
          }}
          value={page + 1}
          active={props.page === page + 1}
          key={page + 1}
        >
          {page + 1}
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
        <Pagination.Prev disabled={props.page === 1} onClick={onPrevClick} />
        {createPaginationItems()}
        <Pagination.Next
          disabled={
            props.page ===
            Math.floor(props.jokesLength / (props.JOKES_ON_PAGE + 1)) + 1
          }
          onClick={onNextClick}
        />
      </Pagination>
    </Footer>
  );
}
