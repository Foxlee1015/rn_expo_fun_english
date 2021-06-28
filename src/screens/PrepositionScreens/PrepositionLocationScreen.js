import React, { useRef, useState} from 'react';
import { StyleSheet, SafeAreaView, Text, ScrollView, View, Animated, FlatList,  } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import NavLink from '../../components/NavLink';
import CanvasBox from '../../components/canvas/CanvasBox';
import CanvasObject from '../../components/canvas/CanvasObject';

const PrepositionLocationScreen = ({  }) => {
  const [location, setLocation] = useState({x:0, y:0});
  const onPressOn = () => {
    setLocation({x:50,y:50})
  };
  const onPressIn = () => {
    setLocation({x:50,y:100})
  };
  const onPressUnder = () => {
    setLocation({x:100,y:50})
  };
  const onPressFront = () => {
    setLocation({x:100,y:100})
  };
  const onPressBehind = () => {
    setLocation({x:50,y:50})
  };

  const buttons = [
    {title: "On", onPress: onPressOn},
    {title: "In", onPress: onPressIn},
    {title: "Under", onPress: onPressUnder},
    {title: "Front", onPress: onPressFront},
    {title: "Behind", onPress: onPressBehind}
  ]

  return (
    <>
      <NavigationEvents onWillFocus={()=>{}} />
      <Text>PrepositionLocation</Text>
      <NavLink
        text="홈"
        routeName="Main"
      />
      <ScrollView 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.contentContainer}>
          <View style={styles.canvasContainer}>
            <CanvasObject location={location} />
            <CanvasBox />
          </View>
        <FlatList
          data={buttons}
          contentContainerStyle={styles.buttonWrapper}
          keyExtractor={item => item.title}
          renderItem={({ item }) => {
            return (
                <Button 
                  title={item.title} 
                  style={styles.button} 
                  onPress={item.onPress} />
                );
          }}
        />
      </ScrollView>
    </>
  );
};

PrepositionLocationScreen.navigationOptions = {
  title: 'PrepositionLocation'
};

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center'
  },
  canvasContainer: {
    width: 300,
    height: 150
  },
  buttonWrapper: {
    width: 300,
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  button: {
    margin: 10,
    width: 120,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  fadingContainer: {
    height: 200
  },
  fadingText: {
    fontSize: 28
  }
});

export default PrepositionLocationScreen;