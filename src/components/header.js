import React from 'react';
import * as Lang from './../lang/lang.json'

class AppHeader extends React.Component {

    constructor(props) {
        super(props);

        this.whatsappLink = "https://wa.me/+33756924397?text=Bonjour,%20êtes-vous%20disponible%20";
        this.state = {
            isMenuOpen: false
        }
    }

    openMenu = () => {
        this.setState({isMenuOpen: !this.state.isMenuOpen});
    }

    render() {
        return (
            <header className={this.props.scrollClass}>
                <div className='app-header'>
                    <div className={this.state.isMenuOpen ? "menu-open logo-container" : "logo-container"}>
                        <div className='app-logo'>
                            <span className='logo-point'></span>
                            <span className='logo-letter'>K</span>
                        </div>
                        <div className='app-brand'>
                            <h1>nektar</h1>
                        </div>
                    </div>
                    <div className='whatsapp'>
                        <a href={this.whatsappLink} target='_self'>
                            <img alt='whatsapp' loading='lazy' src='whatsapp.png' ></img>
                        </a>
                    </div>
                    <div className='lang' onClick={this.props.langChange}>
                        <span>
                            <img loading='lazy' src={this.props.lang == "en" ? "united-kingdom.png" : "france.png"} alt={this.props.lang}></img>
                        </span>
                    </div>
                    <div className='app-search'>
                        <button className='btn'>
                            <p className='link'> Book a meeting</p>
                            <span className='notification-badge'>1</span>
                        </button>
                    </div>
                    <div className='toggle-menu-item'>
                        <button className={this.state.isMenuOpen ? "menu-open" : ""} onClick={ this.openMenu }>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
                <div className={this.state.isMenuOpen ? "menu-open app-menu" : "app-menu"}>
                    <nav>
                        <ul>
                            <li>
                                <a>🌌 {Lang[this.props.lang]["our_clients"]}</a>
                            </li>
                            <li>
                                <a>🔥 {Lang[this.props.lang]["about"]}</a>
                            </li>
                            <li>
                                <a>🚀 {Lang[this.props.lang]["serviecs_price"]}</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default AppHeader;
