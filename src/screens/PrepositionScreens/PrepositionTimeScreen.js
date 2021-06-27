import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import NavLink from '../../components/NavLink';

const PrepositionTimeScreen = ({  }) => {

  return (
    <>
      <NavigationEvents onWillFocus={()=>{}} />
      <Text>PrepositionTimeScreen</Text>
      <NavLink
        text="홈"
        routeName="Main"
      />
    </>
  );
};

PrepositionTimeScreen.navigationOptions = {
  title: 'PrepositionTime'
};

const styles = StyleSheet.create({});

export default PrepositionTimeScreen;
