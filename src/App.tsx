import 'App.scss';
import Hello from 'components/Hello';
import logo from 'logo.svg';
import * as React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Hello name="World" enthusiasmLevel={10} />
        </div>
      </div>
    );
  }
}

export default App;
