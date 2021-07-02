import React from 'react'
import {StyleSheet} from 'react-native'
import {FlatList, Center} from 'native-base'

import PrepositionTitleBox from '../../components/PrepositionTitleBox'
import {prepositions} from '../../data/local/prepositions'

const PrepositionListScreen = ({}) => {
  return (
    <Center flex={1}>
      {prepositions && (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatlist}
          numColumns={2}
          data={prepositions}
          renderItem={({item}) => <PrepositionTitleBox item={item} />}
          keyExtractor={item => item.title}
        />
      )}
    </Center>
  )
}

PrepositionListScreen.navigationOptions = {
  title: '전치사 공부'
}

const styles = StyleSheet.create({
  flatlist: {
    flexDirection: 'column',
    width: '100%'
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
})

export default PrepositionListScreen
