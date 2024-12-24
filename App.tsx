import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './src/navigation/navigation';

import {store} from './src/store/store';
import {Provider} from 'react-redux';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
