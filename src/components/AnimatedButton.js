import React, {useRef, useState} from 'react';
import { StyleSheet, Text, Pressable, ActivityIndicator} from 'react-native';
import * as Animatable from 'react-native-animatable';

const AnimatedButton = ({text="", _onPressRedirect=null, isCorrect=false}) => {
  const AnimationRef = useRef(null);
  const [value, setValue] = useState(text);
  const [showIndicator, setShowIndicator] = useState(false);

  const _onPressIn = () => {
    if (isCorrect) {
        setShowIndicator(true);
        return;
    } 

    if (AnimationRef) AnimationRef.current?.bounce();
    setValue(`${text}-Wrong`);
  }

  const _onPressOut = () => {
    if (!isCorrect) return;
    setShowIndicator(false);
    _onPressRedirect();
  }
  
  return (
      <Animatable.View ref={AnimationRef}>
        {showIndicator && <ActivityIndicator size="small" color="#0000ff" />}
        <Pressable onPressIn={_onPressIn} onPressOut={_onPressOut}>
        {({ pressed }) => (
            <Text style={styles.text, 
              {
                backgroundColor: pressed && !_onPressRedirect
                  ? 'rgb(220, 32, 32)'
                  : 'rgb(32, 137, 220)'
              }}>
                {showIndicator || value}
            </Text>
            )}
        </Pressable>
      </Animatable.View>
  );
}


const styles = StyleSheet.create({
  text: {
    color: 'white',
    width: 200,
    textAlign: 'center'
  }
});

export default AnimatedButton;