import React, {useRef} from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import * as Animatable from 'react-native-animatable';

const AnimatedButton = ({text}) => {
  const AnimationRef = useRef(null);
  const _onPress = () => {
    if(AnimationRef) {
      AnimationRef.current?.bounce();
    }
  }
  return (
    <TouchableWithoutFeedback onPress={_onPress}>
      <Animatable.View ref={AnimationRef}>
        <Text style={styles.text}>{text}</Text>
      </Animatable.View>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  text: {
    backgroundColor: 'rgb(32, 137, 220)',
    color: 'white',
    width: 200,
    textAlign: 'center'
  }
});

export default AnimatedButton;
