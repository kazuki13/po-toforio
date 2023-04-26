import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link,NavLink } from "react-router-dom";
import Home from './js/HOME'; //作成したpage1.jsを読み込んでいる
import Productions from './js/Productions';
import Wasurenbou from './js/wasurenbou';
import Egate from './js/E-gate';
import Souseki from './js/souseki';
import Satoukibi from './js/satoukibi';
import Wannyannet from './js/Wannyannet';
import Others from './js/others';
import React from 'react'


class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/Productions`} element={<Productions />} />
          <Route path={`/wasurenbou`} element={<Wasurenbou />} />
          <Route path={`/E-gate`} element={<Egate />} />
          <Route path={`/souseki`} element={<Souseki />} />
          <Route path={`/satoukibi`} element={<Satoukibi />} />
          <Route path={`/Wannyannet`} element={<Wannyannet />} />
          <Route path={`/other`} element={<Others />} />
        </Routes>
      </BrowserRouter>
    );
  };
}

function App2() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

export default App;