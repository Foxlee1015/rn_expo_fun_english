import React, {useState} from 'react';

export default ({initialValue="", label="", autoCorrect=false}) => {
    const [value, onChangeText] = useState(initialValue);

    return {value, onChangeText, autoCorrect, label}
}