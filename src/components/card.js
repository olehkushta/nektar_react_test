import React from 'react';

import * as Lang from '../lang/lang.json';

class ServiceCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const key = this.props.index;
        return (
            <div className='service-card' style={{backgroundColor: this.props.detail.backColor}}>
                <div className='text-content'>
                    <h4>{Lang[this.props.lang][this.props.detail.title]}</h4>
                    <p>{Lang[this.props.lang][this.props.detail.title + "_1"]}</p>
                    <p>{Lang[this.props.lang][this.props.detail.title + "_2"]}</p>
                    <p></p>
                    <br></br>
                    <button className='price' style={{backgroundColor: this.props.detail.color, color: this.props.index == 0 ? "#fff" : "#000"}}>
                        {Lang[this.props.lang]["from"]} {this.props.detail.price} €
                    </button>
                </div>
                <div className='image-content' style={{backgroundColor: this.props.detail.color}}>
                    <img src={this.props.detail.img} ></img>
                </div>
            </div>
        );
    }
}

export default ServiceCard;
