import React, {useContext, useState, useEffect, useRef} from 'react';
import { StyleSheet, View } from 'react-native';
import  { Context as VerbContext } from '../../context/VerbContext';
import AnimatedButton from "../../components/AnimatedButton";
import Spacer from "../../components/Spacer";
import { Text } from 'react-native-elements';

const VerbDetailScreen = ({ navigation }) => {
  const _id = navigation.getParam('_id');
  const { state } = useContext(VerbContext);
  const [verb, setVerb] = useState(null);
  
  useEffect(()=>{
    setVerb(state.find(v => v.id === _id))
  },[])

  const _onPressRedirect = () => {
    let nextVerbId = _id;
    while (nextVerbId === _id) {
      const nextVerb = Math.floor(Math.random() * state.length);
      nextVerbId = state[nextVerb].id;
    }
    navigation.push('VerbDetail', { _id:  nextVerbId})
  }
  
  return (
    <>
      <Text h2>Verb Detail</Text>
      {verb && (
        <View style={styles.container}>
          <Spacer>
            <AnimatedButton text={`${verb.present}1`} />
          </Spacer>
          <Spacer>
            <AnimatedButton text={`${verb.present}2`} />
          </Spacer>
          <Spacer>
            <AnimatedButton text={verb.present} _onPressRedirect={_onPressRedirect} isCorrect={true}/>
          </Spacer>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
});

export default VerbDetailScreen;
