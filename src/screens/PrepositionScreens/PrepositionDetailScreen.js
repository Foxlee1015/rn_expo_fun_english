import React, {useEffect} from 'react'
import {StyleSheet, ScrollView} from 'react-native'
import {NavigationEvents} from 'react-navigation'
import {Heading, Text, useColorModeValue, Divider} from 'native-base'
import {navigate} from '../../navigationRef'
import Spacer from '../../components/Spacer'

const PrepositionDetailScreen = ({navigation}) => {
  const preposition = navigation.getParam('item')

  useEffect(() => {
    if (!navigation || !navigation.getParam('item')) {
      navigate('PrepositionList')
    }
    console.log(preposition)
  }, [])

  const PlaceComponent = ({item}) => {
    return (
      <Spacer>
        <Heading
          size="xs"
          color={useColorModeValue('red.500', 'red.300')}
          fontWeight="500"
          ml={-0.5}
          mt={-1}>
          The Silicon Valley of India. - place
        </Heading>
        <Text lineHeight={6} fontWeight={400}>
          Bengaluru (also called Bangalore) is the center of India's high-tech
          industry. The city is also known for its parks and nightlife.
        </Text>
        <Divider my={2} />
      </Spacer>
    )
  }

  const TimeComponent = ({item}) => {
    return (
      <Spacer>
        <Heading
          size="xs"
          color={useColorModeValue('red.500', 'red.300')}
          fontWeight="500"
          ml={-0.5}
          mt={-1}>
          The Silicon Valley of India. - place
        </Heading>
        <Text lineHeight={6} fontWeight={400}>
          Bengaluru (also called Bangalore) is the center of India's high-tech
          industry. The city is also known for its parks and nightlife.
        </Text>
        <Divider my={2} />
      </Spacer>
    )
  }

  return (
    <>
      <Spacer>
        <Heading
          alignSelf={{
            base: 'center',
            md: 'flex-start'
          }}>
          {navigation.getParam('item').title}
        </Heading>
      </Spacer>
      <ScrollView showsVerticalScrollIndicator={false}>
        {preposition.contents.time && <TimeComponent />}
        {preposition.contents.time && <PlaceComponent />}
      </ScrollView>
    </>
  )
}

PrepositionDetailScreen.navigationOptions = {
  title: 'PrepositionDetailScreen'
}

const styles = StyleSheet.create({})

export default PrepositionDetailScreen
