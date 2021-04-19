import React, { useState, useEffect } from "react";
import Logo from "../images/logo192.png";
import { Card } from "semantic-ui-react";
import "../styles/title.css";
const items = [
  {
    header: "COVID-19 TODAY",
  },
];

const Title: React.FC = () => {
  return (
    <div className="title">
      <img
        src={Logo}
        style={{ width: 400, padding: 30, display: "inline-block" }}
      />
      <Card.Group centered items={items} />
    </div>
  );
};

export default Title;
