import React, {useEffect, useState} from 'react'
import {StyleSheet, ScrollView, FlatList, Text} from 'react-native'
import {Button} from 'react-native-elements';
import { navigate } from '../../navigationRef'

import Spacer from '../../components/Spacer'
import PrepositionDetailCard from '../../components/preposition/PrepositionDetailCard';
import PrepositionAdvancedDetailCard from '../../components/preposition/PrepositionAdvancedDetailCard';


const PrepositionDetailScreen = ({navigation}) => {
  const preposition = navigation.getParam('item')
  const {number, time, place, advanced} = preposition.contents;

  const [tab, setTab] = useState([])
  const [showTab, setShowTab] = useState(null)

  useEffect(() => {
    if (!navigation || !preposition) {
      navigate('PrepositionList')
    } else {
      let {contents} = preposition
      let newTab = []

      for (const key in contents) {
        if (contents[key]) {
          newTab.push(key) 
        }
      setTab([...newTab])
      setShowTab(newTab[0])
      }
    }
  }, [])

  const Tab = ({item}) => {
    return (
      <Button
        style={styles.TabButton}
        title={item}
        type="clear"
        onPress={() => setShowTab(item)} />
    )
  }

  return (
    <>
      <Spacer margin={0} padding={10} color="green">
        <Text style={styles.HeadingText}>
          {preposition.title}
        </Text>
      </Spacer>
      <Spacer margin={0}>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={tab}
            contentContainerStyle={styles.TabContainer}
            renderItem={({item}) => (
              <Tab item={item}/>
            )}
            keyExtractor={item => item}
          />
      </Spacer>
      <ScrollView showsVerticalScrollIndicator={false}>
            {showTab === 'number' && <PrepositionDetailCard data={number} />}
            {showTab === 'place' && <PrepositionDetailCard data={place} />}
            {showTab === 'time' && <PrepositionDetailCard data={time} />}
            {showTab === 'advanced' && <PrepositionAdvancedDetailCard data={advanced}/>}
      </ScrollView>
    </>
  )
}

PrepositionDetailScreen.navigationOptions = {
  title: 'PrepositionDetailScreen'
}

const styles = StyleSheet.create({
  HeadingText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    textAlign: 'center'
  },
  TabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 0
  },
  TabButton: {
    width: 100,
    height: 30
  },
  TabText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    textAlign: 'center'
  }
})

export default PrepositionDetailScreen
