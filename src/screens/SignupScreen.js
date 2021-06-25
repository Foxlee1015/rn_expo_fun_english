import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({  }) => {

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={()=>{}} />
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={"ss"}
        submitButtonText="Sign Up"
        onSubmit={()=>{}}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account? Sign in instead!"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: null
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
});

export default SignupScreen;
