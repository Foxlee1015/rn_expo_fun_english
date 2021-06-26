import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as VerbProvider } from './src/context/VerbContext';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import VerbCreateScreen from './src/screens/VerbCreateScreen';
import VerbDetailScreen from './src/screens/VerbDetailScreen';
import VerbListScreen from './src/screens/VerbListScreen';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import { FontAwesome } from '@expo/vector-icons';

import { Logs } from 'expo'

Logs.enableExpoCliLogging()

const verbListFlow = createStackNavigator({
  VerbList: VerbListScreen,
  VerbDetail: VerbDetailScreen
});

verbListFlow.navigationOptions = {
  title: 'Verbs',
  tabBarIcon: <FontAwesome name="th-list" size={20} />
};

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen
  }),
  mainFlow: createBottomTabNavigator({
    verbListFlow,
    VerbCreate: VerbCreateScreen,
    Account: AccountScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
        <AuthProvider>
          <VerbProvider>
            <App
              ref={navigator => {
                setNavigator(navigator);
              }}
            />
          </VerbProvider>
      </AuthProvider>
  );
};
