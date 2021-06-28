import React, { useEffect, useRef, useState} from 'react';
import { StyleSheet, ScrollView, View, FlatList, Text  } from 'react-native';
import { Button } from 'react-native-elements';
import NavLink from '../../components/NavLink';
import CanvasBox from '../../components/canvas/CanvasBox';
import CanvasCube from '../../components/canvas/CanvasCube';
import CanvasObject from '../../components/canvas/CanvasObject';

const PrepositionLocationScreen = ({  }) => {
  const [objectPrevLocation, setObjectPrevLocation] = useState({x:0, y:0});
  const [objectCurLocation, setObjectCurLocation] = useState({x:0, y:0});
  const [selectedPreposition, setSelectedPreposition] = useState("");
  const [subject, setSubject] = useState("A ball");
  const [verb, setVerb] = useState("is");
  
  const changeLocation = (item) => {
    const {x,y} = item.objectNextLocation;
    setObjectPrevLocation({...objectCurLocation})
    setObjectCurLocation({x,y})
    setSelectedPreposition(item.title.toLowerCase())
  }

  const buttons = [
    {title: "On", objectNextLocation: {x:300,y:30}},
    {title: "In", objectNextLocation: {x:50,y:70}},
    {title: "Under", objectNextLocation: {x:100,y:30}},
    {title: "Front", objectNextLocation: {x:140,y:100}},
    {title: "Behind", objectNextLocation: {x:80,y:80}},
    {title: "Inside", objectNextLocation: {x:150,y:75}},
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
        <Text>{`${subject} ${verb} ${selectedPreposition} the cube.`}</Text>
        <View style={styles.canvasContainer}>    
          <CanvasCube />
          <CanvasObject prevLocation={objectPrevLocation} curLocation={objectCurLocation} />
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
                  onPress={()=>changeLocation(item)} />
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
