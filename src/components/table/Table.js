import React, { useEffect, useState } from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import "./Table.css";
import './tablemobile/TableMobile.css'
import Footer from "../footer/Footer";
import TableMobile from "./tablemobile/TableMobile";
import TableHeadMobile from "./tablemobile/TableHeadMobile";

const Table = () => {
  const [CryptoData, setCryptoData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchCryptoData = async () => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&amp;order=market_cap_desc&amp;per_page=100&amp;page=1&amp;sparkline=false&amp;price_change_percentage=24h%2C7d"
    );
    const data = await res.json();
    setCryptoData(data);
  };

  useEffect(() => {
    fetchCryptoData();
  }, []);

  return (
    <>
      <div className="table-desktop">
        <table className="table table-lg table-md table-sm ">
          <TableHeader />
          <tbody>
            {CryptoData &&
              CryptoData.slice(page * 10 - 10, page * 10).map((result) => {
                return (
                  <TableBody
                    key={result.market_cap_rank}
                    id={result.market_cap_rank}
                    imgUrl={result.image}
                    name={result.name}
                    symbol={result.symbol}
                    price={result.current_price}
                    oneDayPriceChange={result.price_change_percentage_24h}
                    sevenDayPriceChange={
                      result.price_change_percentage_7d_in_currency
                    }
                    marketCap={result.market_cap}
                    volume={result.total_volume}
                    circulatingSupply={result.circulating_supply}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="table-mobile">
        <div className="table table-sm">
          <TableHeadMobile />
          <tbody>
          {CryptoData &&
            CryptoData.slice(page * 10 - 10, page * 10).map((result) => {
              return (
                <TableMobile
                  key={result.market_cap_rank}
                  id={result.market_cap_rank}
                  imgUrl={result.image}
                  name={result.name}
                  symbol={result.symbol}
                  price={result.current_price}
                  oneDayPriceChange={result.price_change_percentage_24h}
                  sevenDayPriceChange={
                    result.price_change_percentage_7d_in_currency
                  }
                  marketCap={result.market_cap}
                  volume={result.total_volume}
                  circulatingSupply={result.circulating_supply}
                />
              );
            })}
</tbody>
        </div>
      </div>

      <Footer length={CryptoData.length} setPage={setPage} page={page} />
    </>
  );
};
export default Table;
