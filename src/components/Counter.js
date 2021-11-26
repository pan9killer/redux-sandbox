import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import "./Counter.css"

const Counter = ({counter, inc, dec, rnd}) => {
  return (
    <div className="jumbotron blocks">
      <h2>{counter}</h2>
      <div className="justif"> 
        <button 
          className="btn btn-primary btn-large btns"
          onClick={dec}
          >DEC</button>
        <button 
          className="btn btn-primary btn-large btns"
          onClick={inc}
          >INC</button>
        <button 
          className="btn btn-primary btn-large btns"
          onClick={rnd}
          >RND</button>
      </div>
      
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state
  };
};

export default connect(mapStateToProps, actions)(Counter);
