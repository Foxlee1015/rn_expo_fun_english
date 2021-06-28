import React, { useRef, useState} from 'react';
import { StyleSheet, ScrollView, View, FlatList,  } from 'react-native';
import { Button } from 'react-native-elements';
import NavLink from '../../components/NavLink';
import CanvasBox from '../../components/canvas/CanvasBox';
import CanvasObject from '../../components/canvas/CanvasObject';

const PrepositionLocationScreen = ({  }) => {
  const [objectLocation, setObjectLocation] = useState({x:0, y:0});
  
  const changeLocation = ({x,y}) => {
    setObjectLocation({x,y})
  }

  const buttons = [
    {title: "On", objectNextLocation: {x:50,y:50}},
    {title: "In", objectNextLocation: {x:50,y:100}},
    {title: "Under", objectNextLocation: {x:100,y:100}},
    {title: "Front", objectNextLocation: {x:100,y:50}},
    {title: "Behind", objectNextLocation: {x:25,y:25}}
  ]

  return (
    <>
      <NavLink
        text="홈"
        routeName="Main"
      />
      <ScrollView 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.canvasContainer}>
          <CanvasObject location={objectLocation} />
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
                  onPress={()=>changeLocation(item.objectNextLocation)} />
                );
          }}
        />
      </ScrollView>
    </>
  );
};

PrepositionLocationScreen.navigationOptions = {
  title: '전치사(위치)'
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