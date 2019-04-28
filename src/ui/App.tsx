import React from 'react';
import './App.css';
import { closeApp, } from './store/system/actions';
import { SystemState } from './store/system/types';
import { AppState } from './store';
import { connect } from 'react-redux';

interface AppProps {
  closeApp: typeof closeApp;
  system: SystemState;
}

const App: React.FC<AppProps> = (props:AppProps) => {
    return (
    <div className="App">
      <header className="App-header">
        <p>
          React Typescript Electron App
        </p>
        <p>
          Edit <code>src/ui/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          <button onClick={() => props.closeApp()}>Close</button>
        </p>
        <p>
          { props.system.isDevToolsOpen?'Dev tools is Open':'Dev tools is Closed' }
        </p>
      </header>
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  system: state.system
});
export default connect(
  mapStateToProps,
  { closeApp }
)(App);

