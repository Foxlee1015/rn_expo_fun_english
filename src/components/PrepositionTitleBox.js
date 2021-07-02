import React from 'react'
import {StyleSheet} from 'react-native'
import {Box, Button} from 'native-base'
import {navigate} from '../navigationRef'

const PrepositionTitleBox = ({item}) => {
  return (
    <Box
      style={styles.box}
      _text={styles.text}
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
        style={styles.button}
        variant="unstyled"
        onPress={() => navigate('PrepositionDetail', {item})}>
        {item.title}
      </Button>
    </Box>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 'md',
    fontWeight: 'bold',
    color: 'white'
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  button: {width: '100%', height: '100%'}
})

export default PrepositionTitleBox
