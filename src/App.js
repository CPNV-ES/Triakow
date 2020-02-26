import React from 'react';
import './App.css';
import {Search} from "./component/search/search";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';
import {Headline} from "./component/headline/headline";
import {Navigation} from "./component/navigation/navigation";

function App() {
  return (
    <div>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Navigation/>
        <Headline/>
        <Search/>
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default App;
