import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const App = () => {
  const [quote, setQuote] = useState("");
  const load = "loaded";

  useEffect(() => {
    fetchQuote();
  }, [load]);

  const fetchQuote = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        setQuote(advice);
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{quote}</h1>
        <button className="button" onClick={fetchQuote}>
          <span>GIVE ME ADVICE</span>
        </button>
      </div>
    </div>
  );
};
export default App;
