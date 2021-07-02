import React, {useEffect, useState} from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  FlatList,
  Text,
  SafeAreaView
} from 'react-native'
import {Button} from 'react-native-elements'
import NavLink from '../../components/NavLink'
import Spacer from '../../components/Spacer'
import CanvasScreen from '../../components/canvas/CanvasScreen'
import {Provider as CanvasObjectProvider} from '../../context/CanvasObjectContext'
import {Entypo} from '@expo/vector-icons'

const PrepositionLocationScreen = ({}) => {
  const [selectedPreposition, setSelectedPreposition] = useState('')
  const [subjectCount, setSubjectCount] = useState(1)
  const [subject, setSubject] = useState('A ball')
  const [verb, setVerb] = useState('is')

  const changeLocation = item => {
    setSelectedPreposition(item.toLowerCase())
  }

  useEffect(() => {
    if (subjectCount === 2) {
      setSubject('Two balls')
      setVerb('are')
      setSelectedPreposition('')
    }
  }, [subjectCount])

  const prepositions = [
    'On',
    'In',
    'Under',
    'Front',
    'Behind',
    'Inside',
    'At',
    'By',
    'Next',
    'Beside',
    'Below',
    'Into',
    'Towards'
  ]

  return (
    <>
      <NavLink text="홈" routeName="Main" />
      <SafeAreaView style={styles.contentContainer}>
        <Button
          title="Next"
          type="outline"
          style={styles.button}
          onPress={() => setSubjectCount(2)}
        />
        <Spacer>
          <Text>{`Where ${verb} ${subject.toLowerCase()}?`}</Text>
        </Spacer>
        <View style={styles.canvasContainer}>
          <CanvasObjectProvider>
            <CanvasScreen
              selectedPreposition={selectedPreposition}
              subjectCount={subjectCount}
            />
          </CanvasObjectProvider>
        </View>
        {selectedPreposition && (
          <Spacer>
            <Text>
              {`${subject} ${verb} `}
              <Text style={styles.textBold}>{selectedPreposition}</Text>
              {` the cube`}
            </Text>
          </Spacer>
        )}
      </SafeAreaView>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}>
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
                onPress={() => changeLocation(item)}
              />
            )
          }}
        />
      </ScrollView>
    </>
  )
}

PrepositionLocationScreen.navigationOptions = {
  title: '전치사(위치)',
  tabBarIcon: <Entypo name="game-controller" size={24} color="blue" />
}

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center'
  },
  textBold: {
    fontWeight: 700
  },
  canvasContainer: {
    width: 300,
    height: 170
  },
  buttonWrapper: {
    width: 300,
    marginTop: 10,
    justifyContent: 'space-around'
  },
  button: {
    margin: 10,
    width: 120
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  fadingContainer: {
    height: 200
  },
  fadingText: {
    fontSize: 28
  }
})

export default PrepositionLocationScreen
