import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [data, setData] = useState();
  const [myerr, setMyerr] = useState(null);
  useEffect(() => {
    const dataFetcher = () => {
      let data = fetch(" https://dummyjson.com/products")
        .then((res) => {
          if (!res.ok) throw Error();
          return res.json();
        })
        .then((json) => {
          // console.log(json);
          setData(json);
        })
        .catch((err) => {
          console.error("An error occurred: ", err);
          setMyerr("An error occurred: ");
        });
    };
    dataFetcher();
  }, []);
  return (
    <div id="main">
      {myerr && myerr}
      <h1>Data Fetched from API</h1>
      <pre>{data ? JSON.stringify(data, undefined, 2) : "Loading..."}</pre>
    </div>
  );
};

export default App;
