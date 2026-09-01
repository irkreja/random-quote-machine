import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import RandomQuotes from './RandomQuotes';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RandomQuotes />
      </Provider>
    );
  }
}

export default App;
