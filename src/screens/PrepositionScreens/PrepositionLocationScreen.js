import React, { useRef, useState} from 'react';
import { StyleSheet, SafeAreaView, Text, ScrollView, View, Animated, FlatList,  } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import NavLink from '../../components/NavLink';

const PrepositionLocationScreen = ({  }) => {
  const [prepositionText, setPrepositionText] = useState('');
  const [transformValueX, setTransformValueX] = useState(0);
  const [transformValueY, setTransformValueY] = useState(0);
  const onPressOn = () => {
    setTransformValueX(10)
    setTransformValueY(10)
    setPrepositionText('on')
    fadeIn()
  };
  const onPressIn = () => {
    setTransformValueX(20)
    setTransformValueY(20)
    setPrepositionText('in')
    fadeIn()
  };
  const onPressUnder = () => {
    setTransformValueX(30)
    setTransformValueY(50)
    setPrepositionText('under')
    fadeIn()
  };
  const onPressFront = () => {
    setTransformValueX(50)
    setTransformValueY(30)
    setPrepositionText('front')
    fadeIn()
  };
  const onPressBehind = () => {
    setTransformValueX(50)
    setTransformValueY(50)
    setPrepositionText('behind')
    fadeIn()
  };

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true
      })
    ]).start();
    // Animated.timing(fadeAnim, {
    //   toValue: 1,
    //   duration: 5000,
    //   useNativeDriver: true
    // }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true
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
            {
              opacity: fadeAnim,
              transform: [
                {
                  translateX: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, transformValueX]
                  })
                },
                {
                  translateY: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, transformValueY]
                  }),
                }
              ]
            }
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
  fadingContainer: {
    height: 200
  },
  fadingText: {
    fontSize: 28
  }
});

export default PrepositionLocationScreen;