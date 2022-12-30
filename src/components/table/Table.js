import React, { useEffect, useState } from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import "./Table.css";

const Table = () => {
  const [CryptoData, setCryptoData] = useState([]);
  // const [page, setPage] = useState(1);

  const fetchCryptoData = async () => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&amp;order=market_cap_desc&amp;per_page=10&amp;page=1&amp;sparkline=false&amp;price_change_percentage=24h%2C7d"
    );
    const data = await res.json();
    setCryptoData(data);
  };


  useEffect(() => {
    fetchCryptoData();
  }, []);

  // const selectPageHandler = (selectedPage) => {
  //   if (
  //     selectedPage >= 1 &&
  //     selectedPage <= CryptoData.length / 10 &&
  //     selectedPage !== page
  //   ) {
  //     setPage(selectedPage);
  //   }
  // };

  // data[0].market_cap_rank,
  // data[0].image,
  // data[0].name,
  // data[0].symbol,
  // data[0].current_price,
  // data[0].price_change_percentage_24h,
  // data[0].price_change_percentage_7d_in_currency,
  // data[0].market_cap,
  // data[0].total_volume,
  // data[0].circulating_supply

  return (
    <div className="d-sm-none d-md-block d-none d-sm-block ">
      <table className="table table-lg table-md table-sm ">
        <TableHeader />
        <tbody>
          {CryptoData &&
            CryptoData.map((result) => {
              return (
                <TableBody 
                id={result.market_cap_rank} 
                imgUrl={result.image} 
                name={result.name}
                symbol={result.symbol}
                price={result.current_price}
                oneDayPriceChange={result.price_change_percentage_24h}
                sevenDayPriceChange={result.price_change_percentage_7d_in_currency}
                marketCap={result.market_cap}
                volume={result.total_volume}
                circulatingSupply = {result.circulating_supply}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
