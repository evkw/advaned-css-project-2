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
              <li className="side-nav__item side-nav__item--active">
                <a href="#" className="side-nav__link">
                  <Icon className="side-nav__icon" icon="icon-home" />
                  <span>Hotel</span>
                </a>
                
              </li>

              <li className="side-nav__item">
                <a href="#" className="side-nav__link">
                  <Icon className="side-nav__icon" icon="icon-aircraft-take-off" />
                  <span>Flight</span>
                </a>
                
              </li>

              <li className="side-nav__item">
                <a href="#" className="side-nav__link">
                  <Icon className="side-nav__icon" icon="icon-key" />
                  <span>Car Rental</span>
                </a>
                
              </li>

              <li className="side-nav__item">
                <a href="#" className="side-nav__link">
                  <Icon className="side-nav__icon" icon="icon-map" />
                  <span>Tours</span>
                </a>
                
              </li>
            </ul>

            <div className="legal">
                &copy; 2019 by trillo. All rights reserved.
            </div>

          </nav>

          <main className="hotel-view">
            <div className="gallery">
              <figure className="gallery__item">
                <img src="https://firebasestorage.googleapis.com/v0/b/evdev-demos.appspot.com/o/Trillo%2Fhotel-1.jpg?alt=media&token=300a5cba-17ee-4670-b526-64a8b1bf9311" className="gallery__photo" alt="Photo of hotel 1"/>
              </figure>
               <figure className="gallery__item">
                <img src="https://firebasestorage.googleapis.com/v0/b/evdev-demos.appspot.com/o/Trillo%2Fhotel-2.jpg?alt=media&token=f9d003e6-43c4-4a1e-96d0-2d8d78708b55" className="gallery__photo" alt="Photo of hotel 1"/>
              </figure>
               <figure className="gallery__item">
                <img src="https://firebasestorage.googleapis.com/v0/b/evdev-demos.appspot.com/o/Trillo%2Fhotel-2.jpg?alt=media&token=f9d003e6-43c4-4a1e-96d0-2d8d78708b55" className="gallery__photo" alt="Photo of hotel 1"/>
              </figure>
            </div>

            <div className="overview">
              <h1 className="overview__heading">
                  Hotel Las Palmas
              </h1>

              <div className="overview__stars">
                  <Icon className="overview__icon-star" icon="icon-star" />
                  <Icon className="overview__icon-star" icon="icon-star" />
                  <Icon className="overview__icon-star" icon="icon-star" />
                  <Icon className="overview__icon-star" icon="icon-star" />
                  <Icon className="overview__icon-star" icon="icon-star" />
              </div>

              <div className="overview__location">
                  <Icon className="overview__icon-location" icon="icon-location-pin" />
                  <button className="btn-inline">Albufeira, Portugal</button>
              </div>

              <div className="overview__rating">
                  <div className="overview__rating-average">8.6</div>
                  <div className="overview__rating-count">429 votes</div>
              </div>
            </div>
          </main>
        </div>

       </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
