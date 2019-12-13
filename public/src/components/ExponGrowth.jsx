import React from 'react';
import ZestHeader from "./ZestHeader.jsx";
import { Chart } from "react-google-charts";
import axios from 'axios';

const data = [
  ["Year", "This home"],
  ["2010", 0],
  ["2011", 0],
  ["2012", 0],
  ["2013", 0],
  ["2014", 0],
  ["2015", 0],
  ["2016", 0],
  ["2017", 0],
  ["2018", 0],
  ["2019", 0],
];

const options = {
  title: "Zestimate History",
  curveType: "function",
  legend: { position: 'top' },
  intervals: "none",
  vAxis: {
    gridlines: {
      color: 'transparent'
    },
    side: 'right'
  },
};


class ExponGrowth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cost : ''
    }
  }
  componentDidMount() {
    this.getData()
      .then(() => { console.log("Data retrieved!")})
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  async getData() {
    const listId = window.location.href.slice(-3);
    const URL = `/api/listing/${listId}`;
    const res = await axios.get(URL);
    const lastSold = res.data[0].last_sold; //TODO
    const initialCost = res.data[0].initial_cost;
    this.getGrowth(initialCost);
  }

  getGrowth(initialVal) {
    const element = [2, 3, 4, 5];
    for (let i = 1; i < 11; i++) {
      let rand = this.getRandomInt(4);
      data[i][1] = initialVal * Math.pow(1 + element[rand] / 100, i);
    }
    const recentCost = parseInt(data[10][1].toString().slice(0,7));
    this.setState({
      cost: recentCost,
    });
  };

  render() {
    return (
      <div className="App">
        < ZestHeader cost={this.state.cost}/>
        <Chart
          chartType="LineChart"
          width="100%"
          height="50%"
          data={data}
          options={options}
        />
      </div>
    );
  }
}

export default ExponGrowth;