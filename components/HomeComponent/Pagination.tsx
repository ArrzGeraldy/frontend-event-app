"use client";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";
import React from "react";

interface PaginationProps {
  page: number;
  lastPage: any;
  isNextPage: any;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  handleNextPage: () => void;
  handlePrevPage: () => void;
}

const Pagination = ({
  page,
  lastPage,
  isNextPage,
  setPage,
  handleNextPage,
  handlePrevPage,
}: PaginationProps) => {
  const toFirstPage = () => {
    setPage(1);
  };

  const toLastPage = () => {
    setPage(lastPage);
  };

  if (lastPage === 1) {
    return null;
  } else {
    return (
      <div className="flex mx-auto gap-4 mb-12 mt-4 w-1/4 rounded px-2 justify-center items-center py-3">
        {page <= 1 ? null : (
          <button
            className="cursor-pointer flex items-center"
            onClick={handlePrevPage}
          >
            <PiCaretLeft size={20} />
            <p>Previous</p>
          </button>
        )}

        <div className="flex gap-2">
          {page === 1 ? (
            <span className="pagination__btn cursor-default active">1</span>
          ) : (
            <span
              className="pagination__btn cursor-pointer"
              onClick={toFirstPage}
            >
              1
            </span>
          )}

          {lastPage <= 2 ? null : page !== 1 && page !== lastPage ? (
            <span className="pagination__btn cursor-default active">
              {page === 1 || page === lastPage ? "2" : page}
            </span>
          ) : (
            <span
              className="pagination__btn cursor-pointer"
              onClick={() => setPage(2)}
            >
              {page === 1 || page === lastPage ? "2" : page}
            </span>
          )}

          <span className="border border-black w-9 text-center rounded cursor-default">
            ...
          </span>

          {page === lastPage ? (
            <span className="pagination__btn active cursor-default">
              {lastPage}
            </span>
          ) : (
            <span
              className="pagination__btn cursor-pointer"
              onClick={toLastPage}
            >
              {lastPage}
            </span>
          )}
        </div>
        {isNextPage ? (
          <button
            className="cursor-pointer flex items-center"
            onClick={handleNextPage}
          >
            <p>Next</p>
            <PiCaretRight size={20} />
          </button>
        ) : null}

        <div className="cursor-pointer flex items-center"></div>
      </div>
    );
  }
};

export default Pagination;
