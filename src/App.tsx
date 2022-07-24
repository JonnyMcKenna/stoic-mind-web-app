import { useEffect, useState } from "react";
import "./App.css";
import data from "./quotes.json";
import { QuoteProps } from "../types/genericTypes";
import FadeIn from "react-fade-in";
// import { Adsense } from "@ctrl/react-adsense";
import logo from "./images/google-play.webp";
import ReactGA from "react-ga";

function App() {
  const [quote, setQuote] = useState<QuoteProps>();

  useEffect(() => {
    ReactGA.initialize("UA-82044662-7");
    ReactGA.pageview("/");
  }, []);

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
        ReactGA.event({
          category: "User",
          action: "Generated a new quote",
        });
        const newQuote = generateNewQuote();
        setQuote(newQuote);
      }}
    >
      <ReactGA.OutboundLink
        eventLabel="stoic-mind-app-google-play-click"
        to="https://play.google.com/store/apps/details?id=com.jonnymckenna.stoicmind"
        target="_blank"
        className="google-play-link"
      >
        <img src={logo} alt="Google Play Link for Stoic Mind" />
      </ReactGA.OutboundLink>
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
      {/* <Adsense
        client="ca-pub-7640562161899788"
        slot="7259870550"
        adTest={
          !process.env.NODE_ENV || process.env.NODE_ENV === "development"
            ? "off"
            : "on"
        }
      /> */}

      <div className="footer">
        Created by{" "}
        <ReactGA.OutboundLink
          eventLabel="jonny-mckenna-website-click"
          to="https://www.jonnymckenna.com/"
          target="_blank"
        >
          Jonny McKenna
        </ReactGA.OutboundLink>
      </div>
    </div>
  );
}

export default App;
