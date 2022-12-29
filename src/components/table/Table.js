import React from "react";

const Table = () => {
  fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&amp;order=market_cap_desc&amp;per_page=100&amp;page=1&amp;sparkline=false&amp;price_change_percentage=24h%2C7d"
  )
    .then((response) => response.json())
    .then((data) =>
      console.log(
        data[0].market_cap_rank,
        data[0].image,
        data[0].name,
        data[0].symbol,
        data[0].current_price,
        data[0].price_change_percentage_24h,
        data[0].price_change_percentage_7d_in_currency,
        data[0].market_cap,
        data[0].total_volume,
        data[0].total_supply
      )
    );

  return (
    <div>
      <table className="table table-lg table-md table-sm ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">
              24H
              {/* downarrow icon */}
            </th>
            <th scope="col">7D</th>
            <th scope="col">MARKRT CAP</th>
            <th scope="col">VOLUME(24H)</th>
            <th scope="col">CIRCULATING SUPPLY</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{/* PUT STARICON */}1</th>
            <td>
              <div className="d-flex">
                {/* ICON OF PARTICULAR NAME */}
                <p>Name </p>
                <span className=".text-muted">SHC</span>
              </div>
            </td>
            <td>$20,055.25</td>
            <td className="text-danger">
              {/* put dropdown red arrow */}
              0.65%
            </td>
            <td className="text-success">
              {/* put dropdown red arrow */}
              0.65%
            </td>
            <td className="font-weight-bold">$1,502,989,963,439,782</td>
            <td>
              <div className="d-flex flex-column">
                <span className="font-weight-bold">$1,502,989,963,439,782</span>
                <span className="text-muted">932,071 BTC</span>
              </div>
            </td>

            <td>
              <div className="d-flex flex-column">
                <span className="font-weight-bold">$1,502,989,963,439,782</span>
                <div
                  className="progress"
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

            <td>:{/* put vertical 3dotsicon */}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
