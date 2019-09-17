import React, {Component, Fragment} from 'react';
import './App.css';
import FoodList from './components/foodlist';

class App extends Component{
  render(){
  return (
    <Fragment>
        <FoodList />
    </Fragment>
  );
}
}

export default App;
