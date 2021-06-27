import React, {useRef} from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import * as Animatable from 'react-native-animatable';

const AnimatedButton = ({text, _onPressRedirect=null}) => {
  const AnimationRef = useRef(null);

  const _onPress = () => {
      console.log(_onPressRedirect);
    if (_onPressRedirect) {
        _onPressRedirect();
        return;
    }

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
