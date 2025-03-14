import React from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Provider as AuthProvider} from './src/context/AuthContext'
import {Provider as VerbProvider} from './src/context/VerbContext'
import {Provider as PrepositionProvider} from './src/context/PrepositionContext'
import AccountScreen from './src/screens/AccountScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import MainScreen from './src/screens/MainScreen'
import VerbCreateScreen from './src/screens/VerbScreens/VerbCreateScreen'
import VerbDetailScreen from './src/screens/VerbScreens/VerbDetailScreen'
import VerbListScreen from './src/screens/VerbScreens/VerbListScreen'
import VerbGamePlantScreen from './src/screens/VerbScreens/VerbGamePlantScreen'
import {setNavigator} from './src/navigationRef'
import ResolveAuthScreen from './src/screens/ResolveAuthScreen'
import PrepositionTypeSelectScreen from './src/screens/PrepositionScreens/PrepositionTypeSelectScreen'
import PrepositionListScreen from './src/screens/PrepositionScreens/PrepositionListScreen'
import PrepositionLocationScreen from './src/screens/PrepositionScreens/PrepositionLocationScreen'
import PrepositionDetailScreen from './src/screens/PrepositionScreens/PrepositionDetailScreen'
import PrepositionTimeScreen from './src/screens/PrepositionScreens/PrepositionTimeScreen'
import {FontAwesome} from '@expo/vector-icons' // https://icons.expo.fyi/

import {NativeBaseProvider} from 'native-base'

const verbListFlow = createStackNavigator({
  VerbList: VerbListScreen,
  VerbDetail: VerbDetailScreen
})

verbListFlow.navigationOptions = {
  title: 'Verbs',
  tabBarIcon: <FontAwesome name="th-list" size={20} />
}

const PrepositionListFlow = createStackNavigator({
  PrepositionTypeSelect: PrepositionTypeSelectScreen,
  PrepositionList: PrepositionListScreen,
  PrepositionDetail: PrepositionDetailScreen
})

PrepositionListFlow.navigationOptions = {
  title: '전치사',
  tabBarIcon: <FontAwesome name="th-list" size={20} color="red" />
}

const switchNavigator = createSwitchNavigator({
  // ResolveAuth: ResolveAuthScreen,
  // mainFlow: createStackNavigator({
  //   Main: MainScreen
  // }),
  // loginFlow: createStackNavigator({
  //   Signin: SigninScreen,
  //   Signup: SignupScreen
  // }),
  // verbFlow: createBottomTabNavigator({
  //   verbListFlow,
  //   VerbGamePlant: VerbGamePlantScreen,
  //   VerbCreate: VerbCreateScreen,
  //   Account: AccountScreen
  // }),
  PrepositionFlow: createBottomTabNavigator({
    PrepositionListFlow,
    PrepositionLocation: PrepositionLocationScreen,
    PrepositionTime: PrepositionTimeScreen
  })
})

const App = createAppContainer(switchNavigator)

const config = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient
  }
}

export default () => {
  return (
    <NativeBaseProvider config={config}>
      <AuthProvider>
        <PrepositionProvider>
        <VerbProvider>
          <App
            ref={navigator => {
              setNavigator(navigator)
            }}
          />
        </VerbProvider>
        </PrepositionProvider>
      </AuthProvider>
    </NativeBaseProvider>
  )
}
