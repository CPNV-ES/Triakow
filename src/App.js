import React from 'react';
import './App.css';
import Menu from "./component/menu/menu";
import LogoZone from "./component/logoZone/logoZone";
import SearchZone from "./component/searchZone/searchZone";

function App() {
  return (
    <div>
      <Menu/>
      <main>
        <LogoZone/>
        <SearchZone/>
      </main>
      <p>Hello world</p>
    </div>
  );
}

export default App;
