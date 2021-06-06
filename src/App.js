import React, { Component } from 'react';

//import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';
import { createStore } from 'redux';
import { PostList } from './features/seatsList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'


import MainPage from './pages/index.jsx';
import NotFound from './pages/404.jsx';
import Miejsca from './pages/miejsca.jsx';
import Sukces from './pages/sukces.jsx';

class App extends Component {

  render() {
    return <Router>
      <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/404" component={NotFound} />
      <Route exact path="/miejsca" component={Miejsca} />
      <Route exact path="/miejsca/sukces" component={Sukces} />
      <Redirect to="/404" />
      </Switch>
    </Router>
  }
}

export default App;


/*

<Router>



{  this.state.productList && <ProductList /> }
{  this.state.productView && <ProductView product={this.state.product} />  }

<Switch>
  <Route
    exact
    path="/"
    render={() => (
      <React.Fragment>
        <PostList />
      </React.Fragment>
    )}
  />
  <Redirect to="/" />
</Switch>
</div>
</div>
</Router>
*/

/*
  // Define an initial state value for the app
  const initialState =  {
    value: 0
  }

  // Create a "reducer" function that determines what the new state
  // should be when something happens in the app
  function counterReducer(state = initialState,  action) {

      // Reducers usually look at the type of action that happened
      // to decide how to update the state
    switch(action.type) {
      case 'counter/incremented':
        return {...state, value: state.value + 1}
      case 'counter/decremented':
        return {...state, value: state.value - 1}
      default:
        // If the reducer doesn't care about this action type,
        // return the existing state unchanged
        return state;
    }
  }

  // Create a new Redux store with the `createStore` function,
  // and use the `counterReducer` for the update logic
  const store = Redux.createStore(counterReducer);

  // Our "user interface" is some text in a single HTML element
  const valueEl = document.querySelector('.test');

  // Whenever the store state changes, update the UI by
  // reading the latest store state and showing new data
  function render() {
    const state = store.getState()
    valueEl.innerHTML = state.value.toString()
  }

  // Update the UI with the initial data
  render();
  // And subscribe to redraw whenever the data changes in the future
  store.subscribe(render);

  // Handle user inputs by "dispatching" action objects,
  // which should describe "what happened" in the app
  document.querySelector('.btn').addEventListener('click', function () {
    store.dispatch({ type: 'counter/incremented' })
  })

*/