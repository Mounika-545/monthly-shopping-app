import React, { Component } from 'react';
import Todo from "./components/Todo"
import Month from "./components/ShowMonth"
import Header from './components/Header';

import GroceryService from './actions/GroceryService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: {}
    }
  }

  componentDidMount() {
    GroceryService.getGroceries().then((res) => {
      this.setState({ groceries: res.data });
    });
  }

  render() {
    const groceriesData = this.state.groceries;
    return (
      <div>
        <Header />
        <Month />
        {groceriesData.length > 0 && <Todo groceries={groceriesData} />}
      </div>
    );
  }
}

export default App;
