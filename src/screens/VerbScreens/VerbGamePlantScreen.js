import React, {useContext} from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as VerbContext } from '../../context/VerbContext';
import CanvasPlant from "../../components/CanvasPlant";
import { Entypo } from '@expo/vector-icons';

const VerbGamePlantScreen = ({ navigation }) => {
  const { state, fetchVerbs } = useContext(VerbContext);

  return (
    <>
    <SafeAreaView forceInset={{ top: 'always' }}>  
      <NavigationEvents onWillFocus={fetchVerbs} />
      <View style={styles.container}>
        <CanvasPlant value={state[1]} size={1}/>
      </View>
    </SafeAreaView>
    </>
  );
};

VerbGamePlantScreen.navigationOptions = {
  title: 'Verb Plant',
  tabBarIcon: <Entypo name="flower" size={20} color="green" />
};

const styles = StyleSheet.create({
    container: {
        top:100
    }
  });

export default VerbGamePlantScreen;
