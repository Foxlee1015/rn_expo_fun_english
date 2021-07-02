import React, {useEffect} from 'react'
import {StyleSheet, ScrollView, FlatList} from 'react-native'
import {NavigationEvents} from 'react-navigation'
import {Heading, Text, useColorModeValue, Divider, Tabs} from 'native-base'
import {navigate} from '../../navigationRef'
import Spacer from '../../components/Spacer'

const PrepositionDetailScreen = ({navigation}) => {
  const preposition = navigation.getParam('item')

  useEffect(() => {
    if (!navigation || !navigation.getParam('item')) {
      navigate('PrepositionList')
    }
  }, [])

  const PrepositionDetailCard = ({data}) => {
    return (
      <Spacer>
        <Heading
          size="xs"
          color={useColorModeValue('red.500', 'red.300')}
          fontWeight="500"
          ml={-0.5}
          mt={-1}>
          {data.title}
        </Heading>
        <Text lineHeight={6} fontWeight={400}>
          {data.definition}
        </Text>
        {data.synonyms && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data.synonyms}
            renderItem={({item}) => (
              <Text lineHeight={6} fontWeight={400}>
                {item}
              </Text>
            )}
            keyExtractor={item => item}
          />
        )}
        {data.examples && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data.examples}
            renderItem={({item}) => (
              <Text lineHeight={6} fontWeight={400}>
                {item}
              </Text>
            )}
            keyExtractor={item => item}
          />
        )}
        <Divider my={2} />
      </Spacer>
    )
  }

  // const TimeComponent = ({data}) => {
  //   return (
  //     <Spacer>
  //       <Heading
  //         size="xs"
  //         color={useColorModeValue('red.500', 'red.300')}
  //         fontWeight="500"
  //         ml={-0.5}
  //         mt={-1}>
  //         The Silicon Valley of India. - {data}
  //       </Heading>
  //       <Text lineHeight={6} fontWeight={400}>
  //         Bengaluru (also called Bangalore) is the center of India's high-tech
  //         industry. The city is also known for its parks and nightlife.
  //       </Text>
  //       <Divider my={2} />
  //     </Spacer>
  //   )
  // }

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
        <Tabs align="center">
          <Tabs.Bar>
            {preposition.contents.place && <Tabs.Tab>Place</Tabs.Tab>}
            {preposition.contents.time && <Tabs.Tab>Time</Tabs.Tab>}
            {preposition.contents.advanced && <Tabs.Tab>Advanced</Tabs.Tab>}
          </Tabs.Bar>
          <Tabs.Views>
            {preposition.contents.place && (
              <Tabs.View>
                <PrepositionDetailCard data={preposition.contents.place} />
              </Tabs.View>
            )}
            {preposition.contents.time && (
              <Tabs.View>
                <PrepositionDetailCard data={preposition.contents.time} />
              </Tabs.View>
            )}
            {preposition.contents.advanced && <Tabs.View>Advanced</Tabs.View>}
          </Tabs.Views>
        </Tabs>
      </ScrollView>
    </>
  )
}

PrepositionDetailScreen.navigationOptions = {
  title: 'PrepositionDetailScreen'
}

const styles = StyleSheet.create({})

export default PrepositionDetailScreen
