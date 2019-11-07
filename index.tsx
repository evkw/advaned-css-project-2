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


             <div className="detail">
                <div className="description">
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                    </p>
                    <p className="paragraph">
                        Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
                    </p>
                    <ul className="list">
                        <li className="list__item">Close to the beach</li>
                        <li className="list__item">Breakfast included</li>
                        <li className="list__item">Free airport shuttle</li>
                        <li className="list__item">Free wifi in all rooms</li>
                        <li className="list__item">Air conditioning and heating</li>
                        <li className="list__item">Pets allowed</li>
                        <li className="list__item">We speak all languages</li>
                        <li className="list__item">Perfect for families</li>
                    </ul>
                    <div className="recommend">
                        <p className="recommend__count">
                            Lucy and 3 other friends recommend this hotel.
                        </p>
                        <div className="recommend__friends">
                            <img src="https://firebasestorage.googleapis.com/v0/b/evdev-demos.appspot.com/o/Trillo%2Fuser-3.jpg?alt=media&token=41fd0501-0674-45e2-93ff-78665b45f142" alt="Friend 1" className="recommend__photo"/>
                            <img src="https://firebasestorage.googleapis.com/v0/b/evdev-demos.appspot.com/o/Trillo%2Fuser-4.jpg?alt=media&token=57820d74-2301-4588-8efb-7e441be89d4a" alt="Friend 2" className="recommend__photo"/>
                            <img src="https://firebasestorage.googleapis.com/v0/b/evdev-demos.appspot.com/o/Trillo%2Fuser-5.jpg?alt=media&token=2f151dd0-c3ed-4259-8ef0-dbdc94f63f91" alt="Friend 3" className="recommend__photo"/>
                            <img src="https://firebasestorage.googleapis.com/v0/b/evdev-demos.appspot.com/o/Trillo%2Fuser-6.jpg?alt=media&token=c4a5f400-2801-43c2-a2e3-629d8ee82f5f" alt="Friend 4" className="recommend__photo"/>
                        </div>
                    </div>
                </div>

                <div className="user-reviews">
                    <figure className="review">
                        <blockquote className="review__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                        </blockquote>
                        <figcaption className="review__user">
                            <img src="https://firebasestorage.googleapis.com/v0/b/evdev-demos.appspot.com/o/Trillo%2Fuser-1.jpg?alt=media&token=258e2454-f920-49e7-8b76-ac197bfc4f38" alt="User 1" className="review__photo"/>
                            <div className="review__user-box">
                                <p className="review__user-name">Nick Smith</p>
                                <p className="review__user-date">Feb 23rd, 2017</p>
                            </div>
                            <div className="review__rating">7.8</div>
                        </figcaption>
                    </figure>

                    <figure className="review">
                        <blockquote className="review__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.
                        </blockquote>
                        <figcaption className="review__user">
                            <img src="https://firebasestorage.googleapis.com/v0/b/evdev-demos.appspot.com/o/Trillo%2Fuser-2.jpg?alt=media&token=c09edf83-e208-4022-b409-0ac6c0b30121" alt="User 1" className="review__photo"/>
                            <div className="review__user-box">
                                <p className="review__user-name">Mary Thomas</p>
                                <p className="review__user-date">Sept 13th, 2017</p>
                            </div>
                            <div className="review__rating">9.3</div>
                        </figcaption>
                    </figure>

                    <button className="btn-inline">Show all <span>&rarr;</span></button>
                </div>

                <div className="cta">
                    <h2 className="cta__book-now">
                        Good news! We have 4 free rooms for your selected dates!
                    </h2>
                    <button className="btn">
                        <span className="btn__visible">Book now</span>
                        <span className="btn__invisible">Only 4 rooms left</span>
                    </button>
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
