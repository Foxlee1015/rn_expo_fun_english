import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as VerbProvider } from './src/context/VerbContext';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import MainScreen from './src/screens/MainScreen';
import VerbCreateScreen from './src/screens/VerbScreens/VerbCreateScreen';
import VerbDetailScreen from './src/screens/VerbScreens/VerbDetailScreen';
import VerbListScreen from './src/screens/VerbScreens/VerbListScreen';
import VerbGamePlantScreen from './src/screens/VerbScreens/VerbGamePlantScreen';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import PrepositionListScreen from './src/screens/PrepositionScreens/PrepositionListScreen';
import { FontAwesome } from '@expo/vector-icons';


const verbListFlow = createStackNavigator({
  VerbList: VerbListScreen,
  VerbDetail: VerbDetailScreen
});

verbListFlow.navigationOptions = {
  title: 'Verbs',
  tabBarIcon: <FontAwesome name="th-list" size={20} />
};


const PrepositionListFlow = createStackNavigator({
  PrepositionList: PrepositionListScreen
});

PrepositionListFlow.navigationOptions = {
  title: 'Prepositions',
  tabBarIcon: <FontAwesome name="th-list" size={20} />
};

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  mainFlow: createStackNavigator({
    Main: MainScreen
  }),
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen
  }),
  verbFlow: createBottomTabNavigator({
    verbListFlow,  
    VerbGamePlant: VerbGamePlantScreen,
    VerbCreate: VerbCreateScreen,
    Account: AccountScreen
  }),
  PrepositionFlow: createBottomTabNavigator({
    PrepositionListFlow,
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
