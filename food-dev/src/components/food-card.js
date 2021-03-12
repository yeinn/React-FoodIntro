import React, { Component } from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import '../style/food-card.scss'

const ImageCard = styled.div`
    height: 200px;
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
    background-color: #f5f5f5;
    background-image: ${p=> (p.photo ? `url(p.photo)` : '')};
    background-position: 50% 50%;
    background-size: cover;

`;

class FoodCard extends Component {
    static defaultProps = {
        name:'food not found',
        photo:'',
        subIntro:'there is no food data'
    }

    render() {
        return (
            <div className="food-card">
                <ImageCard photo={this.props.ptoto}/>
                <div className="food-card-name">
                    <span>{this.props.name}</span>
                </div>
                <div className="food-card-contents">{this.props.subIntro}</div>
                
            </div>
        );
    }
}

export default withRouter(FoodCard);