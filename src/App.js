import React, {Suspense} from 'react';
import {Search} from "./component/search/search";
import {Headline} from "./component/headline/headline";
import {Navigation} from "./component/navigation/navigation";

function App() {
  return (
    <div>
      <Suspense fallback={"loading"}>
        <Navigation/>
        <Headline/>
        <Search/>
      </Suspense>
    </div>
  );
}

export default App;
