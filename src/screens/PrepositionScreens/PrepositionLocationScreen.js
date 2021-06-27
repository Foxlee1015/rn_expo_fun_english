import React, { useRef, useState} from 'react';
import { StyleSheet, SafeAreaView, Text, ScrollView, View, Animated, FlatList,  } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import NavLink from '../../components/NavLink';

const PrepositionLocationScreen = ({  }) => {
  const [prepositionText, setPrepositionText] = useState('');
  const onPressOn = () => {
    setPrepositionText('on')
    fadeIn()
  };
  const onPressIn = () => {
    setPrepositionText('in')
    fadeOut()
  };
  const onPressUnder = () => {
    setPrepositionText('under')
  };
  const onPressFront = () => {
    setPrepositionText('front')
  };
  const onPressBehind = () => {
    setPrepositionText('behind')
  };

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000
    }).start();
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
        <Animated.View
          style={[
            styles.fadingContainer,
            {opacity: fadeAnim}
          ]}
        >
          <Text style={styles.fadingText}>{prepositionText}</Text>
      </Animated.View>
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
  fadingText: {
    fontSize: 28
  }
});

export default PrepositionLocationScreen;