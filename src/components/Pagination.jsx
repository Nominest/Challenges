import { useState } from "react";
import PageButton from "./subcomponents/PageButton";
import { Link, NavLink } from "react-router-dom";

const pageNumbers = 100;

export default function Pagination() {
  const [currentPage, setCurrentPAge] = useState(10);
  const [buttonsPerPAge] = useState(5);
  const indexOfLast = currentPage * buttonsPerPAge;
  const indexOfFirst = indexOfLast - buttonsPerPAge;
  // const currentRecords = pageNumbers.slice(indexOfFirst, indexOfLast);

  return (
    <div>
      <Link
        to={`/page/${setCurrentPAge - 2}`}
        onClick={() => setCurrentPAge(currentPage - 2)}
      >
        Previous
      </Link>
      <Link
        to={`/page/${setCurrentPAge - 2}`}
        onClick={() => setCurrentPAge(currentPage - 2)}
      >
        <PageButton btnName={currentPage - 2} btnClass={"pageBtn"} />
      </Link>
      <Link
        to={`/page/${setCurrentPAge - 1}`}
        onClick={() => setCurrentPAge(currentPage - 1)}
      >
        <PageButton btnName={currentPage - 1} btnClass={"pageBtn"} />
      </Link>
      <span>
        <PageButton btnName={currentPage} btnClass={"pageBtn-active"} />
      </span>
      <Link
        to={`/page/${setCurrentPAge + 1}`}
        onClick={() => setCurrentPAge(currentPage + 1)}
      >
        <PageButton btnName={currentPage + 1} btnClass={"pageBtn"} />
      </Link>
      <Link
        to={`/page/${setCurrentPAge + 2}`}
        onClick={() => setCurrentPAge(currentPage + 2)}
      >
        <PageButton btnName={currentPage + 2} btnClass={"pageBtn"} />
      </Link>
      <Link
        to={`/page/${setCurrentPAge + 1}`}
        onClick={() => setCurrentPAge(currentPage + 1)}
      >
        Next
      </Link>
      {/* <PageButton btnName={"4"} btnClass={"pageBtn"} /> */}
    </div>
  );
}
