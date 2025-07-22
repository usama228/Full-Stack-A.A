"use client";

export default function Pagination1(props) {
  const { clickOnPage, currentPage, itemsPerPage, totalItems } = props
  
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const handlePageClick = (pageNumber) => {
    clickOnPage(pageNumber)
  }
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const visiblePages = 5; // Number of pages to show
    let startPage = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
    let endPage = Math.min(startPage + visiblePages - 1, totalPages);

    if (endPage - startPage + 1 < visiblePages) {
      startPage = Math.max(endPage - visiblePages + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? "active pagination-disabled" : ""}`}
          onClick={() => handlePageClick(i)}
        >
          <a className="page-link">{i}</a>
        </li>
      );
    }

    // Show ellipsis if there are more pages before the first visible page
    if (startPage > 1) {
      pageNumbers.unshift(
        <li key="start-ellipsis" className="page-item">
          <span className="page-link">...</span>
        </li>
      );
    }

    // Show ellipsis if there are more pages after the last visible page
    if (endPage < totalPages) {
      pageNumbers.push(
        <li key="end-ellipsis" className="page-item">
          <span className="page-link">...</span>
        </li>
      );
    }

    return pageNumbers;
  };

  // Calculate the range of items to show
  const calculateItemRange = () => {
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);
    return `${startItem} – ${endItem} of ${totalItems} items available`;
  };
  return (
    <>
      <div
        className={`mbp_pagination text-center mt30`}
      >
        <ul className="page_navigation">
          <li
            className={`page-item ${currentPage === 1 ? "pagination-disabled" : ""}`}
            onClick={() => handlePageClick(currentPage - 1)}
          >
            <a className="page-link">
              <span className="fas fa-angle-left" />
            </a>
          </li>
          {renderPageNumbers()}
          <li
            className={`page-item ${currentPage === totalPages ? "pagination-disabled" : ""}`}
            onClick={() => handlePageClick(currentPage + 1)}
          >
            <a className="page-link">
              <span className="fas fa-angle-right" />
            </a>
          </li>

        </ul>
        <p className="mt10 mb-0 pagination_page_count text-center">
          {calculateItemRange()}
        </p>
      </div>
    </>
  );
}
