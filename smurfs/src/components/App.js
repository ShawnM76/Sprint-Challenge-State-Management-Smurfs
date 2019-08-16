import React from 'react';
import { connect } from 'react-redux';
import SmurfList from './SmurfList';

import './App.css';
import Smurf from './Smurf';
const App = props => {
  return (
    <div className='App'>
      <SmurfList />
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
