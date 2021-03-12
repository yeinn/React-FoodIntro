import React, { Component } from 'react';
import foodCard from './food-card';


class foodCardList extends Component {
    static defaultProps={
        foodData:[]
    }
    render() {

        const renderFoodcard = foods => {
            return foods.map((food,idx)=> {
                return <foodCard key={idx} photo={food.photo} name={food.name} subIntro={food.subIntro}/> })
        }
        return (
            <div id="app-food-card-container">
                {renderFoodcard(this.props.foodData)}
            </div>
        );
    }
}

export default foodCardList;