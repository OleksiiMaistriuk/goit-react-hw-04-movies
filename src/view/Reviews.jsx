import { Component } from 'react';

import { getReviews } from '../servis/moviesApi';

export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { moviesId } = this.props.match.params;
    const response = await getReviews(moviesId);
    this.setState({ reviews: response.data.results });
  }

  render() {
    const { reviews } = this.state;

    return (
      <>
        {reviews && (
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h3>name: {author}</h3>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        )}
        {!reviews && "we don't have many reviews"}
      </>
    );
  }
}
