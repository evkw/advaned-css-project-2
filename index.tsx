import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './sass/main.scss';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
       <div className="container">
        <header className="header">
          Header part
        </header>

        <div className="content">
          <nav className="nav-bar">

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
