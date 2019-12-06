import React from 'react';
import { Chart } from "react-google-charts";
import axios from 'axios';

const data = [
  ["Year", "Cost"],
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
// const listId = window.location.href.slice()
const getData = async () => {
  const id = getRandomInt(99);
  console.log(id);
  const URL = `/api/listing/0${id}/history`;
  const res = await axios.get(URL);
  const lastSold = res.data[0].last_sold; //TODO
  const initialCost = res.data[0].initial_cost;
  getGrowth(initialCost);
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const getGrowth = (initialVal) => {
  const element = [2, 3, 4, 5];
  for (let i = 1; i < 11; i++) {
    let rand = getRandomInt(4);
    data[i][1] = initialVal * Math.pow(1 + element[rand] / 100, i);
  }
};

const options = {
  title: "Zestimate History",
  curveType: "function",
  legend: "none",
  intervals: "none",
  vAxis: {
    gridlines: {
      color: 'transparent'
    },
    side: 'left'
  },
};

class ExponGrowth extends React.Component {

  componentDidMount() {
    getData()
  }

  render() {
    return (
      <div className="App">
        <Chart
          chartType="LineChart"
          width="100%"
          height="700px"
          data={data}
          options={options}
        />
      </div>
    );
  }
}

export default ExponGrowth;