import React, { Component } from 'react';

export default class Home extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: 'Home',
        };
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.pageTitle}</h1>
                <div>Discover Good Eats in Salt Lake City and Beyond with</div>
                <div>FoodLakeCity</div>
            </div>
        );
    }
}