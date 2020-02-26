import React from 'react';
import './App.css';
import {Search} from "./component/search/search";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';
import {Headline} from "./component/headline/headline";
import {Menu} from "./component/menu/menu";

function App() {
  return (
    <div>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Menu/>
        <Headline/>
        <Search/>
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default App;
