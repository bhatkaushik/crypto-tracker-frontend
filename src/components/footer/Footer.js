/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = ({ length, setPage, page }) => {
  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
    console.log(selectedPage);
  };

  return (
    <>
      {length > 0 && (
        <div className="Footer">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
              <li
                className="page-item"
                onClick={() => selectPageHandler(page - 1)}
              >
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                </a>
              </li>
              {[...Array(length / 10)].map((_, i) => {
                return (
                  <li
                    key={i}
                    className="page-item"
                    onClick={() => selectPageHandler(i + 1)}
                  >
                    <a className="page-link" href="#">
                      {i + 1}
                    </a>
                  </li>
                );
              })}
              <li
                className="page-item"
                onClick={() => selectPageHandler(page + 1)}
              >
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">»</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Footer;
