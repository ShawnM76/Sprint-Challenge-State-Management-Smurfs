import React from 'react';
import { connect } from 'react-redux';

import './App.css';
const App = props => {
  return (
    <div className='App'>
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have funn!</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state,
  };
};

export default connect(
  mapStateToProps,
  {},
  null,
)(App);
