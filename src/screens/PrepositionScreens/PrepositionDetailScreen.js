import React, {useEffect} from 'react'
import {StyleSheet, Text} from 'react-native'
import {NavigationEvents} from 'react-navigation'
import {navigate} from '../../navigationRef'

const PrepositionDetailScreen = ({navigation}) => {
  console.log(navigation.getParam('name'))

  useEffect(() => {
    if (!navigation || !navigation.getParam('name')) {
      navigate('PrepositionList')
    }
  }, [])

  return (
    <>
      <NavigationEvents onWillFocus={() => {}} />
      <Text>{navigation.getParam('name')}</Text>
    </>
  )
}

PrepositionDetailScreen.navigationOptions = {
  title: 'PrepositionDetailScreen'
}

const styles = StyleSheet.create({})

export default PrepositionDetailScreen
