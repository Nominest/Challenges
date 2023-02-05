import { useState } from "react";
import PageButton from "./subcomponents/PageButton";
import { Link, NavLink } from "react-router-dom";

export default function Pagination() {
  const pageNumbers = 100;
  const [currentPage, setCurrentPAge] = useState(10);
  const [buttonsPerPAge] = useState(5);
  const indexOfLast = currentPage * buttonsPerPAge;
  const indexOfFirst = indexOfLast - buttonsPerPAge;
  // const currentRecords = pageNumbers.slice(indexOfFirst, indexOfLast);

  return (
    <div>
      {currentPage > 1 && (
        <Link
          to={`/page/${currentPage - 1}`}
          onClick={() => setCurrentPAge(currentPage - 1)}
        >
          Previous
        </Link>
      )}
      {currentPage > 2 && (
        <Link
          to={`/page/${currentPage - 2}`}
          onClick={() => setCurrentPAge(currentPage - 2)}
        >
          <PageButton btnName={currentPage - 2} btnClass={"pageBtn"} />
        </Link>
      )}
      {currentPage > 1 && (
        <Link
          to={`/page/${currentPage - 1}`}
          onClick={() => setCurrentPAge(currentPage - 1)}
        >
          <PageButton btnName={currentPage - 1} btnClass={"pageBtn"} />
        </Link>
      )}
      <span>
        <PageButton btnName={currentPage} btnClass={"pageBtn-active"} />
      </span>
      <Link
        to={`/page/${currentPage + 1}`}
        onClick={() => setCurrentPAge(currentPage + 1)}
      >
        <PageButton btnName={currentPage + 1} btnClass={"pageBtn"} />
      </Link>
      <Link
        to={`/page/${currentPage + 2}`}
        onClick={() => setCurrentPAge(currentPage + 2)}
      >
        <PageButton btnName={currentPage + 2} btnClass={"pageBtn"} />
      </Link>
      {currentPage < pageNumbers && (
        <Link
          to={`/page/${currentPage + 1}`}
          onClick={() => setCurrentPAge(currentPage + 1)}
        >
          Next
        </Link>
      )}
    </div>
  );
}
