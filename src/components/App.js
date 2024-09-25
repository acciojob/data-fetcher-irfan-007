import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const dataFetcher = () => {
      let data = fetch(" https://dummyjson.com/products")
        .then((data) => data.json())
        .then((json) => {
          console.log(json);
          setData(json);
        })
        .catch((error) => console.error("An error occurred: ", error));
    };
    dataFetcher();
  }, []);
  return (
    <div id="main">
      <h1>Data Fetched from API</h1>
      <pre>{data ? JSON.stringify(data, undefined, 4) : "Loading..."}</pre>
    </div>
  );
};

export default App;
