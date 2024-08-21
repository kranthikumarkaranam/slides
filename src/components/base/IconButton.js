import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native-web';
import Styles from '../../styles';

const IconButton = (props) => {
    const position = {};
    if (props.left) {
        position.left = 24;
    } else {
        position.right = 24;
    }

    return (
        <TouchableOpacity
            style={[Styles.button_icon_only, styles.arrowButtons, position, props.disabled ? styles.disabled : '']}
            onPress={props.onPress || props.onClick}
            disabled={props.disabled}
            testID={props.testID}>
            <Image
                source={{uri: `icons/${props.icon}.svg`}}
                style={[Styles.button_icon_only]}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    arrowButtons: {
        position: 'absolute',
        zIndex: 1,
        backgroundColor: 'white',
        padding: 8,
        width: 48,
        height: 48,
        top: 110
    },
    disabled: {
        backgroundColor: "#bfbfbf"
    }
})

export default IconButton;
