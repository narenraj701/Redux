import React from 'react';
import { Provider } from 'react-redux';
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import ChocolateContainer from './components/ChocolateContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <ChocolateContainer />
      </div>
    </Provider>
  );
}

export default App;
