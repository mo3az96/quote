import "./App.css";
import React, { useEffect, useState } from "react";

export const App = () => {
  const [quote, setQuote] = useState("");
  const load = "loaded";

  useEffect(() => {
    fetchQuote();
  }, [load]);

  const fetchQuote = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        const { advice } = data.slip;
        setQuote(advice);
      })
      .catch((err) => {
        alert(err);
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
