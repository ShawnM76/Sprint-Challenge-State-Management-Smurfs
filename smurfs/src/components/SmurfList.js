import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';
import Smurf from './Smurf';
import AddSmurf from './AddSmurf';

const SmurfList = props => {
  return (
    <div>
      <h1>List of Smurfs!</h1>
      <AddSmurf />
      <button onClick={props.getData}>Get List of Smurfs!</button>
      {props.smurfs &&
        props.smurfs.map(smurf => <Smurf key={smurf.name} smurfs={smurf} />)}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
  };
};

export default connect(
  mapStateToProps,
  { getData },
)(SmurfList);
