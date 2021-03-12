import React, {  Component } from 'react';
import { Route } from 'react-router';
import './style/App.scss';
import foodCardList from './components/food-card-list';
import foodData from './food-data';

class App extends Component {
  state={
    FoodDate: foodData
  };
  render(){
  return (
    <div className="app-container">
      <div id="app">
        <div id="app-header">
          <span>음식 리스트</span>
        </div>
        <Route path="/foods" render={()=> <foodCardList foodData={this.state.foodData}/>}/>
      </div>
    </div>
  );
}
}

export default App;
