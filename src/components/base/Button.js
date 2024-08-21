import React from 'react';
import {TouchableOpacity} from 'react-native-web';
import Styles from '../../styles';
import {Text} from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity style={[Styles.button, props.disabled ? Styles.button_disabled : '']}
                          disabled={props.disabled}
                          onPress={props.onPress || props.onClick}
                          testID={props.testID}>
            <Text style={{color: '#fff'}}>{props.children}</Text>
        </TouchableOpacity>
    );
};

export default Button;
