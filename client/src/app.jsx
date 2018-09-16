import React from 'react';
import axios from 'axios';
import TotalRatings from './totalRatings';
import VerifiedGuarantee from './verifiedGuarantee';
import Review from './review';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalRatings: 0,
      avgRatings: 0,
      reviews: []
    };
  }

  async componentDidMount() {
    const res1 = await axios.get(`http://localhost:3002/${this.props.id}/api/ratings`, {
      params: { total: '', average: '' }
    });
    const res2 = await axios.get(`http://localhost:3002/${this.props.id}/api/reviews`);

    this.setState({
      totalRatings: res1.data.total,
      avgRatings: res1.data.average,
      reviews: res2.data
    });
  }

  render() {
    const { totalRatings, avgRatings, reviews } = this.state;
    return (
      <div>
        <h1 className="tipsTitle">Customer Reviews</h1>
        <hr />
        <TotalRatings totalRatings={totalRatings} avgRatings={avgRatings} />
        <VerifiedGuarantee />
        {reviews.map(review => (
          <Review key={`review-${review.user[0]._id}`} reviewObject={review} />
        ))}
      </div>
    );
  }
}

export default App;
