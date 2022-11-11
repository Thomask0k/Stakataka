import React from "react";
import { Button, Pagination as BootstrapPagination } from "react-bootstrap";
import plusle from "../assets/plusle.gif";
import minun from "../assets/minun.gif";

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
      <img src={minun} style={{ width: "35px" }} />
      <BootstrapPagination.Prev
        disabled={page <= 1}
        onClick={previousPage}
      />{" "}
      <BootstrapPagination.Item>
        {page} of {lastPage}
      </BootstrapPagination.Item>
      <BootstrapPagination.Next
        disabled={page >= lastPage}
        onClick={nextPage}
      />
      <img src={plusle} style={{ width: "35px" }} />
      <BootstrapPagination.Last
        disabled={page >= lastPage}
        onClick={goToLastPage}
      />
    </BootstrapPagination>
  );
};
export default Pagination;
