import React from 'react';
import { View, StyleSheet } from 'react-native';

const Spacer = ({ children, color, margin=15, padding=10 }) => {


  const spaceStyles = {
    margin,
    padding
  }

  const colorStyles = {
    backgroundColor: color
  }

  return <View style={[spaceStyles, colorStyles]}>{children}</View>;
};

// const styles = StyleSheet.create({
//   spacer: {
//     margin: 15
//   }
// });

export default Spacer;
