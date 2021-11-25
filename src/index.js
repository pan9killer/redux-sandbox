import { createStore, bindActionCreators } from "redux";
import * as actions from './actions';
import reducer from "./reducer";

const store = createStore(reducer);
const {dispatch, getState} = store;

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

document.getElementById('inc').addEventListener('click', inc);
document.getElementById('dec').addEventListener('click', dec);
document.getElementById('rnd').addEventListener('click', () => {
  const payload = Math.floor(Math.random()*11);
  rnd(payload)});

const update = () => {
  document.getElementById('counter').innerHTML = getState();
}

store.subscribe(update)
