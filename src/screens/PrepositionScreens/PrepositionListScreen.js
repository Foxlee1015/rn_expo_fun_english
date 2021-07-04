import React, {useState, useEffect, useContext} from 'react'
import {StyleSheet, View} from 'react-native'
import { Chip } from 'react-native-elements';
import { FlatList, Center } from 'native-base'

import Spacer from '../../components/Spacer'
import PrepositionTitleBox from '../../components/PrepositionTitleBox'
import {prepositions} from '../../data/local/prepositions'
import { Context as PrepositionContext } from "../../context/PrepositionContext"


const PrepositionListScreen = ({ }) => {
  
  const { state, updateType } = useContext(PrepositionContext);
  const prepositionTypes = ['time', 'place', 'number']
  const [filteredPrepositions, setFilteredPrepositions] = useState([]);
  

  useEffect(() => {
    console.log(state)
    setFilteredPrepositions(prepositions.filter(preposition => {
      if (preposition.contents[state]) {
        return preposition
      }
      })) 
  },[state])
  
  
  return (
    <Center flex={1}>
      <Spacer margin={5}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.chipContainer}
          numColumns={3}
          data={prepositionTypes}
          renderItem={({ item }) => (
            <Spacer margin={5}>
              <Chip
                title={item.toUpperCase()}
                type={state !== item ? "outline" : "solid"}
                onPress={() => { updateType(item) }}/>
            </Spacer>
          )}
          keyExtractor={item => item}
            />
      </Spacer>
      {filteredPrepositions && (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatlist}
          numColumns={3}
          data={filteredPrepositions}
          renderItem={({ item }) => <PrepositionTitleBox item={{...item}}/>}
          keyExtractor={item => item.title}
        />
      )}
    </Center>
  )
}

PrepositionListScreen.navigationOptions = {
  header: false
}


const styles = StyleSheet.create({
  flatlist: {
    flexDirection: 'column',
    width: '100%'
  },
  chipContainer: {
    justifyContent: 'space-evenly'
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
})

export default PrepositionListScreen