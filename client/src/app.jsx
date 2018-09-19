import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TotalRatings from './totalRatings';
import VerifiedGuarantee from './verifiedGuarantee';
import Review from './review';

const Container = styled.div`
  color: #75787b;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 300;
`;

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
      <Container>
        <h1 className="tipsTitle">Customer Reviews</h1>
        <hr />
        <TotalRatings totalRatings={totalRatings} avgRatings={avgRatings} />
        <VerifiedGuarantee />
        {reviews.map(review => (
          <Review key={`review-${review.user[0]._id}`} reviewObject={review} />
        ))}
      </Container>
    );
  }
}

export default App;
