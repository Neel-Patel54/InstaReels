import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
import Reels from './src/screens/Reels';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Reels />
      </PersistGate>
    </Provider>
  );
};

export default App;
