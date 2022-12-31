import React from 'react'

const TableHeadMobile = () => {
  return (
    <>
    <thead>
        <tr>
        <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">
            <div className="d-flex align-items-center">
              <span> 24H</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-down"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                />
              </svg>
            </div>
          </th>
        </tr>
      </thead>
    </>
  )
}

export default TableHeadMobile