import React, { Component } from 'react';
import {
    View,
    Dimensions,
    Image,
    Text
} from 'react-native';
import Colors from '../../../Common/Constants/Colors'
import TitleHead from '../../../Components/TitleHead';

const ProjectSet1 = [

    {
        name: 'Livehealth',
        description: 'Livehealth is a medical records management app that gets medical reports from health providers directly to the app. You can manage & maintain your medical records right from the app.',
        link: 'https://play.google.com/store/apps/details?id=com.livehealth&hl=en',
        language: 'React Native',
        source: require("../../../Common/Assets/images/livehealth_app.png")

    },
    {
        name: 'Livehealth for Doctor',
        description: 'Livehealth for Doctors is a mobile application built on Android for Lab users and Doctors. App that helps you manage your centre remotely. Get daily updates about your finances and collections.',
        link: 'https://play.google.com/store/apps/details?id=com.livehealthdoctorapp&hl=en',
        language: 'Android',
        source: require('../../../Common/Assets/images/livehealthdoc_app.jpg')

    },
    {
        name: 'Al Aziziya',
        description: 'Al Aziziya is a Qatar based job recruitment application. It was a freelanced project which was built for both the platforms, Android and iOS using React Native.',
        link: 'https://github.com/Aaleen110/Aziziya',
        language: 'React Native',
        source: require('../../../Common/Assets/images/aziziya_app.png')

    }
]


const win = Dimensions.get('window');

export default class Freelancing extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }


    componentDidMount() {

    }

    render() {
        let data = ProjectSet1

        return (
            <View style={{ flex: 1, }}>

                <TitleHead
                    header={"Freelancing"}
                    subheader={"Some of my companies where I worked with."}
                    alignment={"left"}
                />

                <View style={{ width: win.width, height: win.height / 1.4, justifyContent: 'center', alignItems: 'center', }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        {data.map((prop, key) => {
                            return (
                                <View style={{
                                    width: 400, backgroundColor: '#121212', borderRadius: 10, marginBottom: 16, borderColor: '#eee', borderWidth: 1,
                                    height: 300,
                                    shadowColor: "#fff",
                                    shadowOffset: {

                                        width: 2,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 10,
                                    alignItems: 'center', flexDirection: 'column', marginHorizontal: 12, marginTop: 50
                                }}>

                                    <View style={{ position: 'absolute', top: -50, right: 20, height: 100, width: 100, backgroundColor: "#fff", justifyContent: 'center', alignItems: 'center', borderColor: "#333", borderWidth: 1, borderRadius: 12, }}>
                                        <Image
                                            style={{ height: 60, width: 60, margin: 8, alignSelf: 'center' }}
                                            source={prop.source} />
                                    </View>
                                    <View style={{ marginTop: 60 }}></View>

                                    <View style={{ alignSelf: 'center', marginLeft: 8, flex: 1 }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 22, color: '#fff', textAlign: 'flex-start', marginLeft: 16 }}>{prop.name}</Text>
                                        <Text style={{ fontSize: 18, color: '#C9C9C9', textAlign: 'flex-start', marginLeft: 16 }}>{prop.language}</Text>
                                        <Text style={{ fontSize: 16, color: 'grey', textAlign: 'flex-start', padding: 20, flex: 0 }}>{prop.description}</Text>
                                        <Text style={{
                                            fontSize: 13, color: Colors.primaryColor, textAlign: 'center', fontWeight: 'bold', paddingHorizontal: 16, paddingTop: 16, paddingBottom: 16,
                                            justifyContent: 'flex-end', position: 'absolute', bottom: 0, alignSelf: 'center',
                                        }}>{prop.link}</Text>
                                    </View>
                                </View>
                            );
                        })}
                    </View>
                </View>
            </View>

        );
    }
}
