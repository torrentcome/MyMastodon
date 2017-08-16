import React from 'react';
import './ReactotronConfig'
import { Provider } from 'react-redux';
import { StatusBar, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { LoginContainer } from './components/login/login.container';
import { Home } from './components/home/home.component';
import { TootEdition } from './components/toots/toot-edition.component';

import { configureStore } from './store/store-configuration';

// Init redux
const store = configureStore();

// Routing, Navigation
const AppNavigator = StackNavigator({
    initialRouteName: {
        screen: LoginContainer
    },
    login: {
        screen: LoginContainer
     },
     home: {
        screen: Home
     },
     tootEdition: {
       screen: TootEdition
     }
});

// Main component
export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
          <AppNavigator />
      </Provider>
    );
  }
};
