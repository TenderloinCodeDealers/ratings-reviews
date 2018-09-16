import React from 'react';
import TotalRatings from './totalRatings';
import VerifiedGuarantee from './verifiedGuarantee';
import Review from './review';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      totalRatings: 0,
      avgRatings: 0,
      reviews: []
    };
  }

  componentDidMount() {
    const url = window.location.href.replace(/^(?:\/\/|[^/]+)*\//, '');
    const id = url.substring(0, url.indexOf('/'));
    this.setState({
      id
    });

    fetch(`http://localhost:3002/${id}/api/ratings?total&average`)
      .then(res => res.json())
      .then(({ total, average }) => {
        this.setState({
          totalRatings: total,
          avgRatings: average
        });
      });

    fetch(`http://localhost:3002/${id}/api/reviews`)
      .then(res => res.json())
      .then(reviews => {
        this.setState({ reviews });
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
        {reviews.map((review, i) => (
          <Review key={`review-${review.user[0]._id}`} reviewObject={review} />
        ))}
      </div>
    );
  }
}

export default App;
