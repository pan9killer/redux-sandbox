import React from "react";
import ReactDOM from "react-dom";
import { createStore, bindActionCreators } from "redux";

import Counter from "./Counter";

import * as actions from './actions';
import reducer from "./reducer";

const store = createStore(reducer);
const {dispatch, getState} = store;

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

const update = () => {
  ReactDOM.render(<Counter 
              counter={getState()}
              inc={inc}
              dec={dec}
              rnd={()=> {
                const value = Math.floor(Math.random()*11);
                rnd(value)
              }}
              />, 
      document.getElementById('root'));
};

update();

store.subscribe(update);
