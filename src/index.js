import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux';


const actionTypes = { press: "PRESS" };

const Button = ({ button }) => (
  <div
    data-button={button}
    onClick={() => {
      store.dispatch({
        type: actionTypes.press,
        button
      });
    }}
  />
);

const display = () =>
  store.getState().display ||
  store.getState().history ||
  0;

const App = props => [
  <h1 key="display">{display()}</h1>,
  <Button key="1" button="1" />,
  <Button key="2" button="2" />,
  <Button key="3" button="3" />,
  <Button key="4" button="4" />,
  <Button key="5" button="5" />,
  <Button key="7" button="7" />,
  <Button key="8" button="8" />,
  <Button key="9" button="9" />,
  <Button key="0" button="0" />,
  <Button key="-" button="-" />,
  <Button key="+" button="+" />,
  <Button key="×" button="×" />,
  <Button key="÷" button="÷" />,
  <Button key="." button="." />,
  <Button key="=" button="=" />,
  <Button key="c" button="c" />
];

const render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById("root")
  );
};

const initialState = {
  display: null
};

const calculatorReducer = (
  state = initialState,
  action
) => {
  ///reducer logic goes here
  return state;
};


const store = createStore(
  calculatorReducer
);
store.subscribe(render);
render();
