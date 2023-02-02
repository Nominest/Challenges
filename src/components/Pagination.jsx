import { useState } from "react";
import PageButton from "./subcomponents/PageButton";
import { Link, NavLink } from "react-router-dom";
const pageNumbers = 100;

export default function Pagination() {
  const [currentPage, setCurrentPAge] = useState(10);
  // const [buttonsPerPAge] = useState(5);
  // const indexOfLast = currentPage * buttonsPerPAge;
  // const indexOfFirst = indexOfLast - buttonsPerPAge;
  // const currentRecords = data.slice(indexOfFirst, indexOfLast);

  return (
    <div>
      <Link
        to={`/page/${setCurrentPAge - 1}`}
        onClick={() => setCurrentPAge(currentPage - 1)}
      >
        <PageButton btnName={currentPage - 1} btnClass={"pageBtn-active"} />
      </Link>
      <span>
        <PageButton btnName={currentPage} btnClass={"pageBtn"} />
      </span>
      <Link
        to={`/page/${setCurrentPAge + 1}`}
        onClick={() => setCurrentPAge(currentPage + 1)}
      >
        <PageButton btnName={currentPage + 1} btnClass={"pageBtn"} />
      </Link>

      {/* <PageButton btnName={"4"} btnClass={"pageBtn"} /> */}
    </div>
  );
}
