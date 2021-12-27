import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

function Search() {
  const key = "1MT4R57J110LPQM2";

  const [text, settext] = useState("faketext");
  const [result, setResult] = useState([]);
  const searchUrl = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${text}&apikey=${key}`;

  useEffect(() => {
    axios.get(searchUrl).then((res) => setResult(res.data));
  }, [text]);

  console.log(result.bestMatches);

  return (
    <div className="searchDiv">
      <div className="searchbar">
        <input
          className="inputBox"
          placeholder="Type Your Company Name Here"
          type={text}
          onChange={(e) => settext(e.target.value)}
        />
        <Button
          style={{
            backgroundColor: "white",
            marginLeft: "-74px",
            borderRadius: "4px",
          }}
        >
          <SearchIcon
            style={{
              backgroundColor: "white",
              marginLeft: "-34px",
              borderRadius: "4px",
            }}
          />
        </Button>
      </div>

      {result.bestMatches === undefined ? (
        <h3 className="searchItem1">
          "Sorry Company does Not Exist or You have Surpassed API LIMIT , Try
          After sometime"
        </h3>
      ) : text === "faketext" ? (
        ""
      ) : (
        result?.bestMatches?.map((res) => (
          <div className="searchitems__option" style={{ display: "flex" }}>
            <h3 className="searchItem">{res["1. symbol"]}</h3>
            <h3 className="searchItem">{res["2. name"]}</h3>
            <h3 className="searchItem">{res["4. region"]}</h3>
            <h3 className="searchItem">{res["8. currency"]}</h3>
          </div>
        ))
      )}
    </div>
  );
}

export default Search;
