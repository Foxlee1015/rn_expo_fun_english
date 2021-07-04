import React from 'react';
import { View, StyleSheet } from 'react-native';

const Spacer = ({ children, color, margin=15, padding=10, height=null }) => {


  const spaceStyles = {
    height,
    margin,
    padding
  }

  const colorStyles = {
    backgroundColor: color
  }

  return <View style={[spaceStyles, colorStyles]}>{children}</View>;
};

const styles = StyleSheet.create({
});

export default Spacer;
