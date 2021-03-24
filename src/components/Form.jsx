import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  state = {
    query: '',
  };

  static propTypes = {
    hangleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
  };

  hangleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
    this.setState({ query: ' ' });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="qery"
            value={this.state.query}
            onChange={this.hangleChange}
          />
          <button type="submit">Search</button>
        </form>
      </>
    );
  }
}
