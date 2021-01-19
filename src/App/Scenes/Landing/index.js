import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Dimensions,
} from 'react-native';
import Colors from '../../../Common/Constants/Colors'
import Strings from '../../../Common/Constants/Strings'
import LottieView from 'react-native-web-lottie';
import Hoverable from "../../../Common/Class/Hoverable";
import Ripple from '../../../Components/Ripple'
import Modal from 'modal-enhanced-react-native-web';
const win = Dimensions.get('window');



export default class Landing extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showBlogsModal: false,
            showAboutModal: false
        }
    }


    componentDidMount() {

    }

    render() {
        return (
            <View style={{ flex: 1, }}>
                <View style={{ backgroundColor: '#fff', height: 100, alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end' }}>

                    <Text
                        onPress={() => {
                            this.setState({ showBlogsModal: true })
                        }}
                        role="button"
                        style={{ color: '#444', fontSize: 20, margin: 16, fontWeight: '300', fontFamily: 'Avenir', }}>Blogs</Text>

                    <Hoverable
                        onHoverIn={() => console.log('Hover_in', 'IN')}
                        onHoverOut={() => console.log('Hover_out', 'OUT')}
                    >
                        {isHovered => (
                            <Ripple
                                role="button"
                                onPress={() => { this.setState({ showAboutModal: true }) }}
                                style={{
                                    height: 40, width: 120, borderRadius: 30, justifyContent: 'center', margin: 16, marginRight: 32,
                                    backgroundColor: isHovered ? Colors.primaryColor : '#fff',
                                    borderWidth: 1,
                                    borderColor: Colors.primaryColor,
                                    overflow: 'hidden'
                                }}>

                                <Text
                                    role="button"
                                    style={{ color: isHovered ? '#fff' : Colors.primaryDark, fontSize: 18, alignSelf: 'center', fontWeight: '400', fontFamily: 'Avenir' }}>About</Text>
                            </Ripple>
                        )}
                    </Hoverable>
                </View>

                <View style={{ width: win.width, backgroundColor: '#fff', alignItems: 'center', marginTop: 30 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 36, color: Colors.darkBlack, fontFamily: 'Avenir' }}>Software Developer, Freelancer & Software Enthusiast</Text>

                    <Text style={{ fontSize: 20, color: Colors.fontGrey, marginTop: 8, fontFamily: 'Avenir' }}>A developer who exactly knows relevant google tags to deliver the expected.</Text>
                </View>


                <Hoverable
                    onHoverIn={() => console.log('Hover_in', 'IN')}
                    onHoverOut={() => console.log('Hover_out', 'OUT')}
                >
                    {isHovered => (
                        <View style={{ height: 150, width: 150, backgroundColor: '#ccc', borderRadius: 80, alignSelf: 'center', marginTop: 32, justifyContent: "center" }}>
                            <Image
                                style={{ width: 150, height: 150, borderRadius: 78, alignSelf: 'center' }}
                                source={isHovered ? require('../../../Common/Assets/images/aaleen_new.png') : require('../../../Common/Assets/images/aaleen_new.png')}
                            />
                        </View>
                    )}
                </Hoverable>

                <View style={{ flexDirection: 'row', overflow: 'hidden' }}>
                    <LottieView
                        source={require('../../../Common/Animations/waves.json')}
                        autoPlay
                        loop={true}
                        progress={0}
                        speed={this.state.speed}
                        resizeMode='center'
                        style={{ bottom: 500, width: win.width, }}
                    />
                </View>

                <Modal
                    isVisible={this.state.showBlogsModal}
                    onBackdropPress={() => this.setState({ showBlogsModal: false })}
                >
                    <View style={{ height: win.height / 1.5, width: win.width / 3, backgroundColor: '#fff', alignSelf: 'center', borderRadius: 12 }}>
                        <View style={{ height: '80%', justifyContent: 'center' }}>


                            <LottieView
                                source={require('../../../Common/Animations/rocket.json')}
                                autoPlay
                                loop={true}
                                progress={0}
                                speed={this.state.speed}
                                resizeMode='center'
                                style={{ bottom: 0, width: '100%', }}
                            />


                        </View>
                        <View style={{ margin: 16 }}>
                            <Text style={{ fontWeight: 'bold', fontFamily: 'Avenir', color: '#1A1A1A', fontSize: 20, textAlign: 'center' }}>Blogs are launching soon... (If I do not procrastinate any more)</Text>
                        </View>
                    </View>
                </Modal>

                <Modal
                    isVisible={this.state.showAboutModal}
                    onBackdropPress={() => this.setState({ showAboutModal: false })}
                >
                    <View style={{ height: win.height / 1.2, width: win.width / 3, backgroundColor: '#fff', alignSelf: 'center', borderRadius: 12 }}>
                        <View style={{ margin: 16 }}>
                            <LottieView
                                source={require('../../../Common/Animations/aaleen_working.json')}
                                autoPlay
                                loop={true}
                                progress={0}
                                speed={this.state.speed}
                                resizeMode='center'
                                style={{ bottom: 0, width: '100%', }}
                            />
                            <Text style={{ fontFamily: 'Avenir', color: '#1A1A1A', fontSize: 20, textAlign: 'center' }}>I am Aaleen Mirza, a minimalist who loves to design beautiful human interfaces, not only design, but write code to translate them into intuitive and attractive digital experiences that solves problem.
In my free time I am a memer running @dayyum2020 on Instagram, someone who loves to travel and click photographs, a gamer and a foodie.</Text>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}
