import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider ,connect} from 'react-redux';
import CounterApp from "./app";

const ACTION_INCREMENT_COUNTER = {
	type: 'ACTION_INCREMENT_COUNTER',
	count: 1
};
  
const ACTION_DECREMENT_COUNTER = {
	type: 'ACTION_DECREMENT_COUNTER',
	count: -1
};

// Reducer
function counterReducer (state = {count: 0}, action) {
	let count = state.count;
	switch (action.type) {
	  case 'ACTION_INCREMENT_COUNTER':
		return {count: count + action.count};
	  case 'ACTION_DECREMENT_COUNTER':
		return {count: count + action.count};
	  default:
		return state;
	}
}

// Containers
function mapStateToPropsContainer (state) {
	return {
	  count: state.count
	};
  }
  
function mapDispatchToPropsContainer (dispatch) {
return {
	onClickPlus: () => dispatch(ACTION_INCREMENT_COUNTER),
	onClickMinus: () => dispatch(ACTION_DECREMENT_COUNTER)
};
}

let App = connect(
	mapStateToPropsContainer,
	mapDispatchToPropsContainer
)(CounterApp);

// main
let store = createStore(counterReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-container')
);