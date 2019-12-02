import React from 'react';
import ExponGrowth from './ExponGrowth.jsx';
import { VictoryChart, VictoryGroup, VictoryVoronoiContainer,
  VictoryLine, VictoryTooltip, VictoryScatter } from 'victory';



class App extends React.Component {
  render() {
    return (
      <div>
        < ExponGrowth />
      </div>
    )
  }
}

export default App;

