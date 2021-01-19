import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import signature from '../../../Common/Assets/svgs/misc/signature.svg'
const win = Dimensions.get('window');

export default class About extends Component {

    render() {
        return (
            <View style={{ flex: 1, }}>
                <View style={{
                    height: win.height, width: win.width, backgroundColor: 'cyan', alignItems: 'center', marginTop: -500, flexDirection: 'row'
                }}>
                    <View style={{ width: '60%', height: '100%', backgroundColor: '#fff', justifyContent: 'center' }}>
                        <View style={{ backgroundColor: "#1E1E1E", height: '50%', width: "90%", borderTopRightRadius: 16, borderBottomRightRadius: 16, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 32, color: '#fff' }}>Hi, I’m Aaleen Mirza</Text>
                            <Text style={{ fontSize: 22, color: '#fff', paddingHorizontal: 50, paddingVertical: 30, textAlign: 'center' }}>A Self driven software developer who is a creative thinker and a team player, having extensive experience in driving application development from planning, wire-framing, designing, implementation, testing, refinement and deployment of Native as well as Hybrid mobile applications.</Text>
                        </View>
                    </View>
                    <View style={{ width: '40%', height: '100%', backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                        <img
                            style={{ height: 360, width: 360 }}
                            src={signature} className="sign-style" alt="signature" />
                    </View>
                </View>
            </View>
        );
    }
}
