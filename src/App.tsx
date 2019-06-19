import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Hotkey, Hotkeys, HotkeysTarget } from "@blueprintjs/core";

@HotkeysTarget
class App extends React.PureComponent<{}> {

  public renderHotkeys() {
    return <Hotkeys>
      <Hotkey
        combo="up"
        label="Up"
        onKeyDown={() => { alert('Need to go up'); }}
      />
    </Hotkeys>;
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Press the UP arrow to test the hotkey.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
