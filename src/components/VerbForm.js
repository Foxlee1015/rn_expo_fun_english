import React, { useState, useContext} from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { Switch } from "react-native-elements";
import { Input, Button } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';

import { Context as VerbContext } from "../context/VerbContext"
import Spacer from './Spacer';
import useTextInput from '../hooks/useTextInput';
import SwitchButton from './SwitchButton';

const VerbForm = () => {
  const { createVerb } = useContext(VerbContext);
  const presentInput = useTextInput({label:"Verb Present"});
  const pastInput = useTextInput({label:"Verb Past"});
  const participleInput = useTextInput({label:"Verb Participle"});

  const [published, setPublished] = useState(false);
  const [isIrregular, setIsIrregular] = useState(false);
  const [learnLevel, setLearnLevel] = useState(0);

  const onSubmit = () => {
    createVerb({
      present: presentInput.value,
      past: pastInput.value,
      participle: participleInput.value, 
      learnLevel, isIrregular
    }) 
  }

  return (
    <SafeAreaView style={styles.container}> 
      <ScrollView>
        <Spacer>
          <Spacer>
            <Input {...presentInput} />
          </Spacer>
          <Spacer>
            <Input {...pastInput} />
          </Spacer>
          <Spacer>
            <Input {...participleInput} />
          </Spacer>
          <View style={styles.bottomContainer}>
            <SwitchButton 
              value={isIrregular} 
              setValue={setIsIrregular}
              leftLabel="Regular Verb"
              rightLabel="Irregular Verb"
            />
            <SwitchButton 
              value={published} 
              setValue={setPublished}
              leftLabel="Not Public"
              rightLabel="Public"
            />
          </View>
          <View style={styles.pickerBox}>
            <Picker
              selectedValue={learnLevel}
              onValueChange={(itemValue, itemIndex) =>
                setLearnLevel(itemValue)
              }>
              <Picker.Item label="Beginner" value={0} />
              <Picker.Item label="Low Intermediate" value={1} />
              <Picker.Item label="Middle Intermediate" value={2} />
              <Picker.Item label="High Intermediate" value={3} />
              <Picker.Item label="advanced" value={4} />
            </Picker>
          </View>
          
        </Spacer>
        <Spacer>
            <Button title="Add" type="outline" onPress={()=>onSubmit()} />
        </Spacer>
      </ScrollView>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  switchLabelBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  pickerBox: {
    alignItems: 'center'
  }
});

export default VerbForm;