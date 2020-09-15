import React, { Component } from 'react';
import { func } from 'prop-types';

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: '' };
  }

  async componentDidMount() {
    try {
      const { props } = this;
      props.updatePageTitle('Users');
      const res = await fetch('/api/getUsername');
      console.log(`Body: ${res.status}`);
      const body = await res.json();
      console.log(body);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  render() {
    const { userName } = this.state;
    return (
      <h1>{userName}</h1>
    );
  }
}

Users.defaultProps = {
  updatePageTitle: () => {}
};

Users.propTypes = {
  updatePageTitle: func
};
