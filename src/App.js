import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Techstack from "./components/Techstack";
import Work from "./components/Work";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

// Connection to GitHub GraphQL API

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${process.env.REACT_GITHUB_API_KEY}`
  }
});


function App() {
// Site navigation
  const [view, setView] = useState("default");
  const handleView = (page) => {
    setView(page);
  };

  return (
    <ApolloProvider client={client}>
      <Header handleView={handleView} />
      <main>
        {(() => {
          switch (view) {
            default:
              return <Hero />;
            case "about":
              return <About />;
            case "tech-stack":
              return <Techstack />;
            case "work":
              return <Work />;
          }
        })()}
      </main>
    </ApolloProvider>
  );
}

export default App;
