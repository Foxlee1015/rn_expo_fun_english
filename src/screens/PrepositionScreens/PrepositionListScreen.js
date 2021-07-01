import React from 'react'
import {StyleSheet, Text} from 'react-native'
import {Box, FlatList, Center, Button} from 'native-base'
import {navigate} from '../../navigationRef'

const prepositions = [
  {title: 'On', colors: ['rose.200', 'rose.800']},
  {title: 'In', colors: ['pink.200', 'pink.800']},
  {title: 'Under', colors: ['warmGray.200', 'warmGray.800']},
  {title: 'Front', colors: ['purple.200', 'purple.800']},
  {title: 'Behind', colors: ['violet.200', 'violet.800']},
  {title: 'Inside', colors: ['indigo.200', 'indigo.800']},
  {title: 'At', colors: ['blue.200', 'blue.800']},
  {title: 'By', colors: ['lightBlue.200', 'lightBlue.800']},
  {title: 'Next', colors: ['cyan.200', 'cyan.800']},
  {title: 'Beside', colors: ['teal.200', 'teal.800']},
  {title: 'Below', colors: ['lime.200', 'lime.800']},
  {title: 'Into', colors: ['amber.200', 'amber.800']},
  {title: 'Towards', colors: ['red.200', 'red.800']}
]

const PrepositionBox = ({item}) => {
  return (
    <>
      <Box
        style={styles.box}
        _text={{
          fontSize: 'md',
          fontWeight: 'bold',
          color: 'white'
        }}
        rounded="md"
        mx={2}
        my={2}
        bg={{
          linearGradient: {
            colors: item.colors,
            start: [0, 0],
            end: [1, 0]
          }
        }}>
        <Button
          style={{width: '100%', height: '100%'}}
          variant="unstyled"
          onPress={() => navigate('PrepositionDetail', {name: item.title})}>
          {item.title}
        </Button>
      </Box>
    </>
  )
}

const PrepositionListScreen = ({}) => {
  return (
    <Center flex={1}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatlist}
        numColumns={2}
        data={prepositions}
        renderItem={({item}) => <PrepositionBox item={item} />}
        keyExtractor={item => item.title}
      />
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
