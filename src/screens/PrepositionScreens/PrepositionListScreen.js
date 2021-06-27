import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import NavLink from '../../components/NavLink';

const PrepositionListScreen = ({  }) => {

  return (
    <>
      <NavigationEvents onWillFocus={()=>{}} />
      <Text>PrepositionListScreen</Text>
      <NavLink
        text="위치"
        routeName="PrepositionLocation"
      />
      <NavLink
        text="시간"
        routeName="PrepositionTime"
      />
    </>
  );
};

PrepositionListScreen.navigationOptions = {
  title: 'PrepositionListScreen'
};

const styles = StyleSheet.create({});

export default PrepositionListScreen;
