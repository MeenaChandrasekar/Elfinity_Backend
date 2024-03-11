// Home.js
import React from "react";
import Button from "./Button/Button";

function Home({ toggleForm }) {
  return (
    <div>
      <Button toggleForm={toggleForm} />
    </div>
  );
}

export default Home;
