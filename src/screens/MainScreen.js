import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import NavLink from '../components/NavLink';

const MainScreen = () => {

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <NavLink
        text="Verb"
        routeName="VerbList"
      />
      <NavLink
        text="전치사"
        routeName="PrepositionList"
      />
    </SafeAreaView>
  );
};

MainScreen.navigationOptions = {
  header: false
};

const styles = StyleSheet.create({});

export default MainScreen;
