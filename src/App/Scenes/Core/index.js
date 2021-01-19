import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';

const win = Dimensions.get('window');

export default class CorePrinciples extends Component {

    render() {
        return (
            <View style={{ flex: 1, }}>
                <View style={{ width: win.width, height: win.height / 1.2, justifyContent: 'center', alignItems: 'center', }}>
                    <Image
                        style={{ width: 650, height: 650, borderRadius: 78, alignSelf: 'center' }}
                        source={require('../../../Common/Assets/images/core_principles.png')}
                    />
                </View>
            </View>
        );
    }
}
