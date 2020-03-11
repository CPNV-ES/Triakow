import React, {Suspense} from 'react';
import {Search} from "./component/search/search";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';
import {Headline} from "./component/headline/headline";
import {Navigation} from "./component/navigation/navigation";

function App() {
  return (
    <div>
      <Suspense fallback={"loading"}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Navigation/>
          <Headline/>
          <Search/>
        </MuiPickersUtilsProvider>
      </Suspense>
    </div>
  );
}

export default App;
