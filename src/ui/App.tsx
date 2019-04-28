import React from 'react';
import {remote} from './electron.utils'
import './App.css';

const App: React.FC = () => {
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
          <button onClick={() => remote.getCurrentWindow().close()}>Close</button>
        </p>
        <p>
          <button onClick={() => remote.getCurrentWindow().webContents.openDevTools()}>Open DevTools</button>
        </p>
      </header>
    </div>
  );
}

export default App;
