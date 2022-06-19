import React, { useEffect, useReducer, useState } from "react";
import "./App.css";
import data from "./quotes.json";
import { QuoteProps } from "../types/genericTypes";
import FadeIn from "react-fade-in";

function App() {
  const [quote, setQuote] = useState<QuoteProps>();

  //TODO: Fix the fade in and out func when changing quotes
  const [fadeIn, setFadeIn] = useState<Boolean>(true);

  useEffect(() => {
    const newQuote = generateNewQuote();
    setQuote(newQuote);
  }, []);

  function generateNewQuote() {
    const retrievedQuotes = data.quotes;
    const randomIndex = Math.floor(Math.random() * retrievedQuotes.length);
    const newQuote = retrievedQuotes[randomIndex];
    return newQuote;
  }

  return (
    <div className="App">
      <div
        className="App-body"
        onClick={() => {
          // setFadeIn(false);

          // setTimeout(() => {
          const newQuote = generateNewQuote();
          setQuote(newQuote);
          // }, 1000);

          // setFadeIn(true);
        }}
      >
        {quote && (
          <FadeIn delay={200} transitionDuration={1500}>
            <blockquote className="App-blockquote">
              <p
                className="App-quote"
                // style={
                //   fadeIn
                //     ? { animation: "fadeIn 1s" }
                //     : { animation: "fadeOut 1s" }
                // }
              >
                {quote.text}
              </p>
              <div className="App-author">- {quote.author}</div>
            </blockquote>
          </FadeIn>
        )}
      </div>
      <FadeIn delay={800} transitionDuration={1500}>
        <footer className="App-footer">
          Created by{" "}
          <a
            href="https://www.jonnymckenna.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jonny McKenna
          </a>
        </footer>
      </FadeIn>
    </div>
  );
}

export default App;
