import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import VerbForm from '../../components/VerbForm';

const VerbCreateScreen = ({ }) => {
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a Verb</Text>
      <VerbForm />
    </SafeAreaView>
  );
};

VerbCreateScreen.navigationOptions = {
  title: 'Add Verb',
  tabBarIcon: <FontAwesome name="plus" size={20} />
};

const styles = StyleSheet.create({});

export default withNavigationFocus(VerbCreateScreen);
