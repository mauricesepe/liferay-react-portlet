import React from "react";
import { Provider } from "react-redux";
import store from "./Store/Store"
import PrimeEpg from "./Containers/PrimeEpg/index";

function App() {
  return ( 
    <Provider store={store}>
      <div className="App">
        <PrimeEpg />
      </div>
    </Provider>
  );
}

export default App;
