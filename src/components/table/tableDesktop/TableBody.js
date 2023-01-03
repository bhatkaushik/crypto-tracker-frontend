import React from "react";
import "./Table.css";

const TableBody = ({ ...props }) => {
  return (
    <>
      <tr>
        <th scope="row">
          <div className="d-flex tbody__desktop_id align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-star"
              viewBox="0 0 16 16"
            >
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
            </svg>
            <span>{props.id}</span>
          </div>
        </th>
        <td>
          <div className="d-flex tbody__desktop_name ">
            <img
              src={props.imgUrl}
              alt={props.name}
              width="24px"
              height="24px"
            />
            <p>{props.name} </p>
            <span className=".text-muted">{props.symbol}</span>
          </div>
        </td>
        <td>${props.price}</td>
        <td
          className={
            props.oneDayPriceChange >= 0 ? "text-success" : "text-danger"
          }
        >
          <div className="d-flex align-items-center">
            {props.oneDayPriceChange >= 0 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-up-fill"
                viewBox="0 0 16 16"
              >
                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            )}
            {Math.abs(props.oneDayPriceChange).toFixed(2)}%
          </div>
        </td>
        <td
          className={
            props.sevenDayPriceChange >= 0 ? "text-success" : "text-danger"
          }
        >
          <div className="d-flex align-items-center">
            {props.sevenDayPriceChange >= 0 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-up-fill"
                viewBox="0 0 16 16"
              >
                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            )}
            {Math.abs(props.sevenDayPriceChange).toFixed(2)}%
          </div>
        </td>
        <td className="font-weight-bold">${props.marketCap}</td>
        <td>
          <div className="d-flex flex-column">
            <span className="font-weight-bold volspan_push_Right">
              ${props.volume}
            </span>
            <span className="text-muted volspan_push_Right">
              932,071 {props.symbol}
            </span>
          </div>
        </td>

        <td>
          <div className="d-flex flex-column align-items-end ">
            <span className="font-weight-bold ">
              ${props.circulatingSupply}
            </span>
            <div
              className="progress w-75  "
              style={{ height: "8px" }}
              role="progressbar"
              aria-label="Warning example"
              aria-valuenow={75}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="progress-bar bg-secondary"
                style={{ width: "75%" }}
              />
            </div>
          </div>
        </td>

        <td>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-three-dots-vertical"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </td>
      </tr>
    </>
  );
};

export default TableBody;
