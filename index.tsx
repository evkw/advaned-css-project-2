import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './sass/main.scss';

import Icon from './components/Icon';

interface AppProps { }
interface AppState {
  name: string;
  icon: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      icon: 'icon-magnifying-glass'
    };
  }

  render() {
    return (
      <div>
       <div className="container">
        <header className="header">
          <img src="https://firebasestorage.googleapis.com/v0/b/evdev-demos.appspot.com/o/Trillo%2Flogo.png?alt=media&token=59410aaa-f72d-439a-9559-29b558fa476d" className="logo" alt="trillo logo" />

          <form action="#" className="search">
              <input type="text" className="search__input" placeholder="Search hotels" />
              <button className="search__button">
                <Icon className="search__icon" icon="icon-magnifying-glass" />
              </button>
          </form>

          <nav className="user-nav">
            <div className="user-nav__icon-box">
              <Icon className="user-nav__icon" icon="icon-bookmark" />
              <span className="user-nav__notification">7</span>
            </div>

            <div className="user-nav__icon-box">
              <Icon className="user-nav__icon" icon="icon-chat" />
              <span className="user-nav__notification">13</span>
             </div>

             <div className="user-nav__user">
                <img src="https://firebasestorage.googleapis.com/v0/b/evdev-demos.appspot.com/o/Trillo%2Fuser.jpg?alt=media&token=abe8d3c2-9e60-4e6d-8408-735902c1b208" className="user-nav__user-photo" alt="user" />
                <span className="user-nav__user-name">Evan</span>
             </div>
          </nav>
        </header>

        <div className="content">
          <nav className="sidebar">

            <ul className="side-nav">
              <li className="side-nav__item">
                <a href="#" className="side-nav__link">
                  <Icon className="side-nav__icon" icon="icon-home" />
                </a>
                <span>Hotel</span>
              </li>

              <li className="side-nav__item">
                <a href="#" className="side-nav__link">
                  <Icon className="side-nav__icon" icon="icon-aircraft-take-off" />
                </a>
                <span>Flight</span>
              </li>

              <li className="side-nav__item">
                <a href="#" className="side-nav__link">
                  <Icon className="side-nav__icon" icon="icon-key" />
                </a>
                <span>Car Rental</span>
              </li>

              <li className="side-nav__item">
                <a href="#" className="side-nav__link">
                  <Icon className="side-nav__icon" icon="icon-map" />
                </a>
                <span>Tours</span>
              </li>
            </ul>

            <div className="legal">
                &copy; 2019 by trillo. All rights reserved.
            </div>

          </nav>

          <main className="hotel-view">

          </main>
        </div>

       </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
