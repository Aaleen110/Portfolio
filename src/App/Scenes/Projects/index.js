import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Dimensions,
    Animated,
} from 'react-native';
import Colors from '../../../Common/Constants/Colors'
import Strings from '../../../Common/Constants/Strings'
import Hoverable from "../../../Common/Class/Hoverable";
import Ripple from '../../../Components/Ripple'
import TitleHead from '../../../Components/TitleHead';

const win = Dimensions.get('window');

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

const ProjectSet2 = [

    {
        name: 'Smart Women Security',
        description: 'Women Security is a native Android based application made as a final year MBA-IT project. The app featured geolocation sharing, spy camera, spy audio, spy video and emergency call.',
        link: 'https://github.com/Aaleen110/SmartWomenSecurity',
        language: 'Android',
        source: require('../../../Common/Assets/images/smartwomen_app.png')

    },
    {
        name: 'Password Generator',
        description: 'This app was created as a freelance college project. The user could create random password on the basis of select parameters and store it in his phone. The user could later acces his randomly created passwords stored locally.',
        link: 'https://github.com/Aaleen110/PasswordGenerator',
        language: 'Android',
        source: require('../../../Common/Assets/images/passwordgenerator_app.png')

    },
    {
        name: 'Tech Quizzy',
        description: 'Tech Quizzy was a fun project made to get people aware of Phishing and other threats we come accross on daily basis. The app features 3 stages, which are unlocked by beating the previous stage.',
        link: 'https://github.com/Aaleen110/Quiz',
        language: 'Android',
        source: require('../../../Common/Assets/images/quiz_app.png')

    }
]

const ProjectSet3 = [

    {
        name: 'Health By Copious',
        description: 'The app has incredible features like paediatric growth charts, vaccination schedules, appointment booking, tele-consultancy. Health by Copious is an extensive growth compiler application designed for Parents of growing children',
        link: 'https://play.google.com/store/apps/details?id=com.calculator_parent_apps&hl=en_IN',
        language: 'Android',
        source: require('../../../Common/Assets/images/health.png')

    },
    {
        name: 'Pivotal',
        description: 'Pivotal by Copious Healthcare is an extensive anthropometric app designed for pediatricians and general practitioners. This app allows clinic to manage patient appointment bookings, video-consultancy, online prescription and referrals with a few clicks.',
        link: 'https://play.google.com/store/apps/details?id=com.calculator_apps',
        language: 'Android',
        source: require('../../../Common/Assets/images/pivotal.jpeg')

    },
    {
        name: 'Roche',
        description: 'Roche was a custom kiosk applications that was installed in Android phones that communicate with POC instruments. Previously this was made possible by rooting the phone and installing the software. But this app uses Android Lock Task mode to cater the requirement of a Kiosk',
        link: '',
        language: 'Android-Kiosk',
        source: require('../../../Common/Assets/images/roche.png')

    }
]

export default class Projects extends Component {

    constructor(props) {
        super(props)
        this.state = {


        }
    }


    componentDidMount() {

    }



    renderProjects = (type = 1) => {
        let data = type == 1 ? ProjectSet1 : type == 2 ? ProjectSet2 : ProjectSet3;

        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                {data.map((prop, key) => {
                    return (
                        <View style={{
                            width: 400, backgroundColor: '#403F3F', borderRadius: 10, marginBottom: 16, borderColor: '#eee', borderWidth: 1,
                            height: 300,
                            shadowColor: "#fff",
                            shadowOffset: {
                                // width: 10,
                                // height: 12,
                                width: 2,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 10,
                            alignItems: 'center', flexDirection: 'column', marginHorizontal: 12, marginTop: 50
                        }}>

                            <View style={{ position: 'absolute', top: -50, right: 20, height: 100, width: 100, backgroundColor: "#fff", justifyContent: 'center', alignItems: 'center', borderColor: "#403F3F", borderWidth: 1, borderRadius: 12, }}>
                                <Image
                                    resizeMode={'contain'}
                                    style={{ height: 60, width: 60, margin: 8, alignSelf: 'center' }}
                                    source={prop.source} />
                            </View>
                            <View style={{ marginTop: 60 }}></View>

                            <View style={{ alignSelf: 'center', marginLeft: 8, flex: 1 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 22, color: '#fff', textAlign: 'flex-start', marginLeft: 16 }}>{prop.name}</Text>
                                <Text style={{ fontSize: 18, color: '#C9C9C9', textAlign: 'flex-start', marginLeft: 16 }}>{prop.language}</Text>
                                <Text style={{ fontSize: 16, color: 'grey', textAlign: 'flex-start', padding: 20, flex: 0 }}>{prop.description}</Text>
                                <Text style={{
                                    fontSize: 13, color: '#DFDFDF', textAlign: 'center', paddingHorizontal: 16, paddingTop: 16, paddingBottom: 16,
                                    justifyContent: 'flex-end', position: 'absolute', bottom: 0, alignSelf: 'center',
                                }}>{prop.link}</Text>
                            </View>
                        </View>
                    );
                })}
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, }}>

                <TitleHead
                    header={"Projects"}
                    subheader={"Some of the projects I have contributed."}
                    alignment={"right"}
                />
                <View style={{ marginTop: 100, width: win.width, }}>
                    {this.renderProjects(1)}
                    {this.renderProjects(2)}
                    {this.renderProjects(3)}
                </View>



                <View style={{ backgroundColor: '#fff', height: 100, marginTop: 50, alignItems: 'center' }}>
                    <Hoverable
                        onHoverIn={() => console.log('Hover_in', 'IN')}
                        onHoverOut={() => console.log('Hover_out', 'OUT')}
                    >
                        {isHovered => (
                            <Ripple
                                onPress={() => { 
                                    window.open("https://github.com/Aaleen110/", '_blank');
                                }}
                                style={{
                                    height: 46, width: 200, borderRadius: 30, marginTop: 36, justifyContent: 'center', margin: 16, marginRight: 32,
                                    backgroundColor: isHovered ? Colors.primaryColor : '#fff',
                                    borderWidth: 1.5,
                                    borderColor: Colors.primaryColor
                                }}>
                                <Text style={{ color: isHovered ? '#fff' : Colors.primaryColor, fontSize: 18, alignSelf: 'center', }}>See more on Github</Text>
                            </Ripple>
                        )}
                    </Hoverable>
                </View>

            </View>
        );
    }
}
