import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    FlatList,
} from 'react-native';

import Hoverable from "../../../Common/Class/Hoverable";
import social_media from '../../../Common/Raw/social_media';
import Ripple from '../../../Components/Ripple'

const win = Dimensions.get('window');

export default class Footer extends Component {

    render() {
        return (
            <View style={{ flex: 1, }}>

                <View style={{
                    zIndex: 1, height: 200, backgroundColor: '#403F3F', width: win.width / 1.4, marginTop: 250, borderRadius: 16, marginBottom: 16, borderWidth: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center'

                }}>

                    <View style={{ width: win.width, alignItems: 'center', marginTop: 20, alignSelf: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 30, color: "#fff" }}>Download Resume</Text>
                        <Text style={{ fontSize: 18, color: "#A0A0A0" }}>Get a copy of my resume by clicking download.</Text>
                    </View>

                    <Hoverable
                        onHoverIn={() => console.log('Hover_in', 'IN')}
                        onHoverOut={() => console.log('Hover_out', 'OUT')}
                    >
                        {isHovered => (
                            <Ripple
                                onPress={() => {
                                    window.open("https://drive.google.com/file/d/1Cp7-l3rAQGRNqp0_mX7tEP9B09qyoE6V/view?usp=sharing", '_blank');
                                }}
                                style={{
                                    height: 40, width: 160, borderRadius: 30, marginTop: 16, justifyContent: 'center', margin: 16,
                                    backgroundColor: isHovered ? "#1A1A1A" : '#1A1A1A',
                                    borderWidth: 1.5,
                                    borderColor: "#1A1A1A"
                                }}>
                                <Text style={{ color: isHovered ? '#fff' : '#fff', fontSize: 18, alignSelf: 'center', fontWeight: 'bold' }}>Download</Text>
                            </Ripple>
                        )}
                    </Hoverable>
                </View>

                <View style={{ backgroundColor: "#1A1A1A", height: 500, marginTop: -150, width: win.width, }}>
                    <View style={{ flex: 1, }}></View>
                    <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 16 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 32, color: '#fff', alignSelf: 'center', justifyContent: 'center', marginTop: -16, padding: 8 }}>Lets Connect!</Text>

                        <View style={{ alignItems: 'center', marginTop: 16, padding: 0, }}>
                            <FlatList
                                contentContainerStyle={{ justifyContent: 'center' }}
                                data={social_media}
                                horizontal
                                renderItem={({ item, index }) =>
                                    <Ripple
                                        onPress={() => window.open(item.link, '_blank')}
                                        style={{ height: 50, width: 50, borderRadius: 25, marginHorizontal: 6, backgroundColor: "#fff", justifyContent: 'center', alignItems: 'center' }}>
                                        <img
                                            src={item.name} className={index == 0 || index == 1 ? "socio-connect-lg-icons" : "socio-connect-icons"} />
                                    </Ripple>
                                }
                            />
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, color: '#fff', alignSelf: 'center', justifyContent: 'center', marginTop: 16, padding: 8 }}>{"Crafted & Developed by Aaleen Mirza"}</Text>
                            <Text style={{ fontSize: 14, color: '#fff', alignSelf: 'center', justifyContent: 'center', marginTop: 0 }}>{"{Made purely with React Native}"}</Text>
                        </View>
                    </View>
                </View>
            </View >
        );
    }
}
