import React, {useEffect, useState} from 'react'
import {StyleSheet, ScrollView, FlatList, Text} from 'react-native'
import {Button} from 'react-native-elements';
import {NavigationEvents} from 'react-navigation'
import {navigate} from '../../navigationRef'
import Spacer from '../../components/Spacer'

import PrepositionDetailCard from '../../components/preposition/PrepositionDetailCard';

const PrepositionDetailScreen = ({navigation}) => {
  const preposition = navigation.getParam('item')
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
      <Button style={styles.TabButton} title={item} type="clear" onPress={()=>setShowTab(item)} />
    )
  }

  return (
    <>
      <Spacer margin={0} padding={10} color="green">
        <Text style={styles.HeadingText}>
          {navigation.getParam('item').title}
        </Text>
      </Spacer>
      <FlatList
          showsVerticalScrollIndicator={false}
          data={tab}
          contentContainerStyle={styles.TabContainer}
          renderItem={({item}) => (
            <Tab item={item}/>
          )}
          keyExtractor={item => item}
        />
      <ScrollView showsVerticalScrollIndicator={false}>
            {showTab === 'number' && <Text>nnn</Text>}
            {showTab === 'place' && <PrepositionDetailCard data={preposition.contents.place} />}
            {showTab === 'time' && <PrepositionDetailCard data={preposition.contents.time} />}
            {showTab === 'advanced' && <Text>aaa</Text>}
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
    height: 100
  },
  TabButton: {
    width: 100,
    height: 100
  },
  TabText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    textAlign: 'center'
  }
})

export default PrepositionDetailScreen
