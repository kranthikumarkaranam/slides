import React, {useState} from 'react';
import {View, Dimensions, StyleSheet} from "react-native-web";
import SlideItem from './SlideItem';
import IconButton from "./base/IconButton";
import Button from './base/Button';
import Styles from '../styles';

function Slides({slides}) {

    const width = Math.min(Dimensions.get('window').width, 600);
    const separatorWidth = 20;
    const itemWidth = width - (separatorWidth * 2);

    const [index, setIndex]= useState(0);
    const currentItem = slides[index];

    return (
        <View>
            <View style={{flex: 1, flexDirection: 'row', marginTop: 10, marginBottom: 30}}>
                <IconButton testID="button-prev" left icon='arrow_back'/>
                <View style={{width: separatorWidth}}/>
                <SlideItem item={currentItem} width={itemWidth}/>
                <View style={{width: separatorWidth}}/>
                <IconButton testID="button-next" right icon='arrow_forward'/>
            </View>
            <View style={styles.restartButtonContainer}>
                <Button testID="button-restart"
                        style={[Styles.mx_8, Styles.button, Styles.button_small]}
                        
                        >
                            Restart
                </Button>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    restartButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default Slides;
