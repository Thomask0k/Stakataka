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
      <img
        src={minun}
        style={{ width: "35px" }}
        onClick={previousPage}
        disabled={page <= 1}
      />
      <BootstrapPagination.Item style={{ fontSize: "20px" }}>
        {page} of {lastPage}
      </BootstrapPagination.Item>
      <img
        src={plusle}
        style={{ width: "35px" }}
        disabled={page >= lastPage}
        onClick={nextPage}
      />
      <BootstrapPagination.Last disabled={page >= lastPage} />
    </BootstrapPagination>
  );
};
export default Pagination;
