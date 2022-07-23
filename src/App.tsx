import { useEffect, useState } from "react";
import "./App.css";
import data from "./quotes.json";
import { QuoteProps } from "../types/genericTypes";
import FadeIn from "react-fade-in";
import { Adsense } from "@ctrl/react-adsense";
import Footer from "./Footer";
import logo from "./images/google-play.webp";

function App() {
  const [quote, setQuote] = useState<QuoteProps>();

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
    <div
      className="App-body"
      onClick={() => {
        const newQuote = generateNewQuote();
        setQuote(newQuote);
      }}
    >
      <a
        className="google-play-link"
        target="_blank "
        href="https://play.google.com/store/apps/details?id=com.jonnymckenna.stoicmind"
      >
        <img src={logo} alt="Google Play Link for Stoic Mind" />
      </a>
      <div className="App-content">
        {quote && (
          <FadeIn delay={200} transitionDuration={1500}>
            <blockquote className="App-blockquote">
              <p className="App-quote">{quote.text}</p>
              <div className="App-author">- {quote.author}</div>
            </blockquote>
          </FadeIn>
        )}
      </div>
      <Adsense
        client="ca-pub-7640562161899788"
        slot="7259870550"
        adTest={
          !process.env.NODE_ENV || process.env.NODE_ENV === "development"
            ? "off"
            : "on"
        }
      />
      <Footer />
    </div>
  );
}

export default App;
