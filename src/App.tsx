import * as React from 'react';
import './App.css';
import Hello from './components/Hello';
import logo from './logo.svg';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Hello name="World" enthusiasmLevel={10} />
        </p>
      </div>
    );
  }
}

export default App;
