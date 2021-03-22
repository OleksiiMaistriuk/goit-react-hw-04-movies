import { Component } from 'react';
import axios from 'axios';

class Reviews extends Component {
  state = {
    reviews: [],
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    await axios
      .get(
        `  https://api.themoviedb.org/3//movie/${movieId}/reviews?api_key=79121d9cf6a0bcf9a51dd363b9565e52`,
      )
      .then(response => this.setState({ reviews: response.data.results }));

    console.log(this.state.reviews);
  }

  render() {
    return (
      <>
        {(this.state.reviews.length && (
          <ul>
            {this.state.reviews.map(review => (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        )) || <p>We don't have any reviews for this movie</p>}
      </>
    );
  }
}
export default Reviews;
