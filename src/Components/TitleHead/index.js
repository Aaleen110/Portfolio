import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles'

export default class TitleHead extends Component {
    render() {
        const { header, subheader, alignment } = this.props;
        return (
            <View style={styles.container}>
                <Text style={[styles.header, alignment == 'right' ? styles.align_right : styles.align_left]}>{header}</Text>
                <Text style={[styles.subheader, alignment == 'right' ? styles.align_right : styles.align_left]}>{subheader}</Text>
            </View>
        );
    }
}
