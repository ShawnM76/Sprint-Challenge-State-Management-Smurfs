import React from 'react';

const Smurf = props => {
  return (
    <div>
      <h3>{props.smurfs.name}</h3>
      <p>AGE: {props.smurfs.age} years old</p>
      <p>Height: {props.smurfs.height}</p>
    </div>
  );
};

export default Smurf;
