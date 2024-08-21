import React from 'react';
import {Image, Text, View, StyleSheet} from "react-native-web";
import Styles from '../styles'


function SlideItem({item: {title, src, text}, width}) {
    return (
        <View style={[Styles.card, Styles.pb_30, styles.container]}>
            <Image
                testID="image"
                style={[styles.image, {width}]}
                source={{uri: src}}/>
            <View style={[Styles.card__card_text]}>
                <View style={[Styles.flex]}>
                    <Text style={styles.title} testID="title">Slide Title Here</Text>
                </View>
                <View style={[Styles.flex]}>
                    <Text style={styles.text} testID="text">Slide Text Here</Text>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 8
    },
    image: {
        height: 230,
        resizeMode: 'cover',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        objectFit: 'cover'
    },
    title: {
        color: '#282828',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 12,
        flexShrink: 1,
        flex: 1,
        flexWrap: 'wrap'

    },
    text: {
        color: '#454545',
        fontSize: 14,
        marginTop: 12,
        textTransform: 'italics',
        maxWidth: 300
    },
    separator: {
        width: 20
    }
});


export default SlideItem;
