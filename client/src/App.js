import React from "react";
import { Helmet } from "react-helmet";
import "./styles/main.css";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FNRC</title>
        <meta
          name="description"
          content="A review center for Internationally Educated Nurses (IENs)"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="www.fnrc.ca" />
      </Helmet>

      <Home exact />
    </>
  );
}

export default App;
