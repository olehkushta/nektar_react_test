import React from 'react';

import * as Lang from '../lang/lang.json';
import Services from './services';

class AppMain extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <div className='landing'>
                    <section>
                        <h2>{Lang[this.props.lang]['online_presence']}</h2>
                        <p>{Lang[this.props.lang]['your_success']}</p>
                        <button className='btn'>
                            <span className='link transparent'>
                                {Lang[this.props.lang]['book_meeting']}
                            </span>
                        </button>
                    </section>
                </div>
                <div className='client-section'>
                    <h2>{Lang[this.props.lang]['clients']}</h2>
                    <div className='clients-content'>
                        <div className='text-content'>
                            <h3>{Lang[this.props.lang]['demanding_clients']}</h3>
                            <p>{Lang[this.props.lang]['our_sucess']}</p>
                            <p>{Lang[this.props.lang]['today_focus']}</p>                            
                        </div>
                        <div className='clients-container'>
                            <img alt='Chanel' src='./chanel.png' className='chanel'></img>
                            <img alt='Hermes' src='./hermes.png' className='hermes'></img>
                            <img alt='Fortuneo' src='./fortuneo.png' className='fortuneo'></img>
                            <img alt='CAA' src='./ca.png' className='caa'></img>
                        </div>
                    </div>
                </div>
                <div className='about-us'>
                    <div className='about-us-content'>
                        <div className='text-content'>
                            <h2>{Lang[this.props.lang]['about_us']}</h2>
                            <h3>{Lang[this.props.lang]['web_agency']}</h3>
                            <p>{Lang[this.props.lang]['our_passion']}</p>
                            <p>{Lang[this.props.lang]['know_how']}</p>
                        </div>
                        <div className='image-content'>
                            <img alt='About' src='./about.png'></img>
                        </div>
                    </div>
                </div>
                <Services lang={this.props.lang}></Services>
            </main>
        );
    }
}

export default AppMain;
