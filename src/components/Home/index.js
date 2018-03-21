import React, { Component } from 'react';

import withAuthorization from '../Session/withAuthorization';

class HomePage extends Component {

  render() {

    return (
      <div>
        <h1>Home</h1>
        <p>Home screen. To-do add some content</p>
      </div>
    );
  }



}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);