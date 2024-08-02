import "./PaginationButtons.css";
import { useNavigate } from "react-router-dom";
import Pagination from "../Pagination/Pagination";

export const PaginationButtons = ({ currentPage, totalPages }) => {
  if (currentPage > totalPages) {
    throw Error("Page not in range");
  }

  const navigate = useNavigate();

  const handleNext = () => navigate(`/page/${currentPage + 1}`);
  const handlePrev = () => navigate(`/page/${currentPage - 1}`);

  return (
    <div className="pagination-buttons d-flex justify-content-center align-items-center mt-4">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="btn btn-primary">
        Previous
      </button>
      <Pagination totalPages={totalPages} currentPage={currentPage} />
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="btn btn-primary">
        Next
      </button>
    </div>
  );
};

export default PaginationButtons;
