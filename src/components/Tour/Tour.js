import React, { Component } from 'react';
import './tour.scss'

export default class Tour extends Component {
    render() {
        const { id, city, img, name, info } = this.props.tour;
        const { removeTour } = this.props;
        return (
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt="image of the tour"/>
                    <span className="close-btn">
                        
                    </span>
                </div>
            </article>
        )
    }
}