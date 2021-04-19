import React, { useEffect, useState } from "react";
import "../styles/App.css";
import Title from "./Title";
import { Cards } from "./Cards";
import { fetchData } from "../config/api";
class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData("tunisia");
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country: string) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className="app">
        <div className="header">
          <div>
            <Title />
          </div>
          <div className="card-container">
            <Cards data={data} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
