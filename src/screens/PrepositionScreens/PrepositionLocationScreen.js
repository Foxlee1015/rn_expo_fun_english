import React, { useEffect, useRef, useState} from 'react';
import { StyleSheet, ScrollView, View, FlatList, Text  } from 'react-native';
import { Button } from 'react-native-elements';
import NavLink from '../../components/NavLink';
import CanvasScreen from '../../components/canvas/CanvasScreen';
import { Provider as CanvasObjectProvider } from '../../context/CanvasObjectContext';


const PrepositionLocationScreen = ({  }) => {
  const [selectedPreposition, setSelectedPreposition] = useState("");
  const [subject, setSubject] = useState("A ball");
  const [verb, setVerb] = useState("is");
  
  const changeLocation = (item) => {
    setSelectedPreposition(item.toLowerCase())
  }

  const prepositions = [
    "On",
    "In",
    "Under",
    "Front",
    "Behind",
    "Inside",
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
          <CanvasObjectProvider>
            <CanvasScreen selectedPreposition={selectedPreposition}/>
          </CanvasObjectProvider>
        </View>
        {selectedPreposition && (
          <View style={styles.textContainer}>
            <Text>{`${subject} ${verb} `}</Text>    
            <Text style={styles.textBold}>{selectedPreposition}</Text>   
            <Text>{` the cube`}</Text>
          </View>
        )}
        <FlatList
          data={prepositions}
          contentContainerStyle={styles.buttonWrapper}
          keyExtractor={item => item}
          numColumns={2}
          renderItem={({item}) => {
            return (
                <Button 
                  title={item}
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
  textContainer: {
    flexDirection: 'row'
  },
  textBold: {
    fontWeight: 700
  },
  canvasContainer: {
    width: 300,
    height: 170,
    marginBottom: 10,
  },
  buttonWrapper: {
    width: 300,
    marginTop: 10,
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
