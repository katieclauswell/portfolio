import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Techstack from "./components/Techstack";
import Work from "./components/Work";
//
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
//

const graphqlUrl =
  process.env.NODE_ENV === "production"
    ? "/github"
    : "http://localhost:8000/github";
const httpLink = createHttpLink({ uri: graphqlUrl });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});

function App() {
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
