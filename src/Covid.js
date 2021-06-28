import { useEffect, useState } from "react";
import "./styles.css";

export default function Covid() {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData);

      setData(actualData.cases_time_series[514]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <div className="covid">
      <h1> Live Covid Tracker</h1>
      <p>
        Our <span> Country</span>
      </p>
      <p>{data.dailyrecovered}</p>
    </div>
  );
}
