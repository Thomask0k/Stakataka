import React from "react";
import { Button, Pagination as BootstrapPagination } from "react-bootstrap";

const Pagination = ({ lastPage, page, setPage }) => {
  function gotToFirstPage() {
    setPage(1);
  }

  function goToLastPage() {
    setPage(lastPage);
  }

  function nextPage() {
    if (page < lastPage) {
      setPage(page + 1);
    }
  }

  function previousPage() {
    if (page !== 1 && page <= lastPage) {
      setPage(page - 1);
    }
  }

  return (
    <BootstrapPagination>
      <BootstrapPagination.First
        disabled={page <= 1}
        onClick={gotToFirstPage}
      />
      <BootstrapPagination.Prev disabled={page <= 1} onClick={previousPage} />
      <BootstrapPagination.Item>
        {page} of {lastPage}
      </BootstrapPagination.Item>
      <BootstrapPagination.Next
        disabled={page >= lastPage}
        onClick={nextPage}
      />
      <BootstrapPagination.Last
        disabled={page >= lastPage}
        onClick={goToLastPage}
      />
    </BootstrapPagination>
  );
};
export default Pagination;
