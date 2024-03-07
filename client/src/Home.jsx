import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
const Home = () => {
  return (
    <section className="home-container">
      <header className="header">
        <Link to="/" className="logo">
          <img src="/assets/logo.png" alt="logo" />
        </Link>
        <span className="copyright">&copy; Islam Hafez</span>
      </header>
      <div className="add-doc">
        <h3>Start a new document</h3>
        <Link className="add-doc_button" to={`/documents/${uuidV4()}`}>
          <img src="/assets/add-doc.png" alt="plus" />
        </Link>
      </div>
    </section>
  );
};

export default Home;
