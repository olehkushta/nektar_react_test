import React from 'react';

import ServiceCard from './card';

import * as Lang from '../lang/lang.json';

class Services extends React.Component {

    constructor(props) {
        super(props);

        this.cards = [
            { backColor: "rgba(76, 94, 255, 0.2)", color: "rgba(76, 94, 255, 1)", img: "./web.png", title: "website_creation", price: "450" },
            { backColor: "rgba(89, 254, 224, 0.2)", color: "rgba(89, 254, 224, 1)", img: "./cms.png", title: "ecommerce_creation", price: "750" },
            { backColor: "rgba(244, 191, 79, 0.2)", color: "rgba(244, 191, 79, 1)", img: "./app.png", title: "web_mobile", price: "1050" },
        ]
    }

    render() {
        const lang = this.props.lang
        return (
            <div className='services reverse'>
                <div className='service-content'>
                    <h2>{Lang[this.props.lang]['serviecs_price']}</h2>
                    <h3>{Lang[this.props.lang]['perfect_synergy']}</h3>
                    <p>{Lang[this.props.lang]['focus_high_value']}</p>
                </div>
                {
                    this.cards.map(function (item, index) {
                        return <ServiceCard key={index} detail={item} lang={lang} index={index}></ServiceCard>
                    })
                }
            </div>
        );
    }
}

export default Services;
