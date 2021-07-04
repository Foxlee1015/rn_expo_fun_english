import React, {useEffect} from 'react'
import {StyleSheet, ScrollView, FlatList, Text} from 'react-native'
import {NavigationEvents} from 'react-navigation'
import {Heading, useColorModeValue, Divider, Button} from 'native-base'
import {navigate} from '../../navigationRef'
import Spacer from '../../components/Spacer'

const PrepositionDetailCard = ({data}) => {
    return (
      <Spacer>
        <Heading
          size="xl"
          color={useColorModeValue('red.500', 'red.300')}
          fontWeight="500"
          ml={-0.5}
          mt={-1}>
          {data.title}
        </Heading>
        <Text lineHeight={6} fontWeight={400} fontSize="md">
          {data.definition}
        </Text>
        {data.synonyms && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data.synonyms}
            renderItem={({item}) => (
              <Button >
                {item}
              </Button>
            )}
            keyExtractor={item => item}
          />
        )}
        {data.definition && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data.definition}
            renderItem={({item}) => (
              <Heading>
                {item}
              </Heading>
            )}
            keyExtractor={item => item}
          />
        )}
        {data.examples && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data.examples}
            renderItem={({item}) => (
              <Heading>
                {item}
              </Heading>
            )}
            keyExtractor={item => item}
          />
        )}
        <Divider my={2} />
      </Spacer>
    )
}
 
export default PrepositionDetailCard
