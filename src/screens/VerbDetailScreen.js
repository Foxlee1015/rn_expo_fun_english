import React, {useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  { Context as VerbContext } from '../context/VerbContext';
import AnimatedButton from "../components/AnimatedButton";
import Spacer from "../components/Spacer";

const VerbDetailScreen = ({ navigation }) => {
  const { state } = useContext(VerbContext);
  const _id = navigation.getParam('_id');
  
  const verb = state.find(v => v.id === _id);
  

  return (
    <>
      <Text style={{ fontSize: 48 }}>Verb Detail</Text>
      <View style={styles.container}>
        <Spacer>
          <AnimatedButton text={verb.present}/>
        </Spacer>
        <Spacer>
          <AnimatedButton text={verb.present}/>
        </Spacer>
        <Spacer>
          <AnimatedButton text={verb.present}/>
        </Spacer>
      </View>
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
