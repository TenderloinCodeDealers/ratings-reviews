import React from 'react';
import TotalRatings from './totalRatings';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1 className="tipsTitle">Customer Reviews</h1>
        <hr />
        <TotalRatings total={5} average={3} />
      </div>
    );
  }
}

export default App;
