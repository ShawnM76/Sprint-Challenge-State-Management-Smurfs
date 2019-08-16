import React, { useState } from 'react';
import { storeData } from '../actions';
import { connect } from 'react-redux';

const AddSmurf = props => {
  const [smurf, setSmurfs] = useState({
    name: '',
    age: Number,
    height: '',
  });
  console.log('smurf', smurf);

  const changeHandler = event => {
    const updatedSmurf = { ...smurf, [event.target.name]: event.target.value };
    setSmurfs(updatedSmurf);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.storeData(smurf);
    // axios
    //   .post('http://localhost:3333/smurfs', smurf)
    //   .then(results => {
    //     console.log(results);
    //   })
    //   .catch(error => {
    //     console.log('O no there is an error!', error);
    //   });
  };

  return (
    <div>
      <h3>Create a Smurf</h3>
      <form>
        <input
          type='text'
          name='name'
          value={smurf.name}
          placeholder='Enter Name'
          onChange={changeHandler}
        />
        <input
          type='text'
          name='age'
          value={smurf.age}
          placeholder='Enter Age'
          onChange={changeHandler}
        />
        <input
          type='text'
          name='height'
          value={smurf.height}
          placeholder='Enter Height'
          onChange={changeHandler}
        />
        <button type='submit' onClick={handleSubmit}>
          Add member
        </button>
      </form>
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
  { storeData },
)(AddSmurf);
