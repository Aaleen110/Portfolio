import React, { Component } from 'react';
// import '../App.css';
import {
    Text,
    View,
    Dimensions,
    TextInput,
} from 'react-native';
import ReactDOM from 'react-dom';
import Colors from '../../../Common/Constants/Colors'
import Strings from '../../../Common/Constants/Strings'
import LottieView from 'react-native-web-lottie';
import LinearGradient from 'react-native-web-linear-gradient';
import Hoverable from "../../../Common/Class/Hoverable";
import Ripple from '../../../Components/Ripple'
import Modal from 'modal-enhanced-react-native-web';

import TitleHead from '../../../Components/TitleHead';
import sleepy_cat from '../../../Common/Assets/svgs/misc/sleepy_cat.svg'


const win = Dimensions.get('window');


export default class Collaborate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showThanksModal: false

        }
    }

    render() {
        return (
            <View style={{ flex: 1, }}>

                <TitleHead
                    header={"Get in touch"}
                    subheader={"Lets build beautiful things together."}
                    alignment={"right"}
                />

                <View style={{
                    height: win.height, width: win.width, backgroundColor: 'cyan', alignItems: 'center', marginTop: 0, flexDirection: 'row'
                }}>

                    <View style={{ width: '60%', height: '100%', backgroundColor: '#fff', justifyContent: 'center' }}>
                        <View style={{ backgroundColor: "#1E1E1E", height: '60%', width: "90%", borderTopRightRadius: 16, borderBottomRightRadius: 16, alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', width: "90%" }}>
                                <View style={{ flex: 1, margin: 32 }}>
                                    <Text style={{ fontSize: 20, color: Colors.fontGrey, marginLeft: 8 }}>Name</Text>
                                    <View style={{ borderWidth: 1, borderColor: '#ccc', height: 40, borderRadius: 8, width: '100%' }}>
                                        <TextInput
                                            style={{ height: 40, fontSize: 18, color: 'grey', outlineColor: "#ffffff", outline: 'none', marginLeft: 8 }}
                                            autoCapitalize={true}
                                            selectionColor={'red'}
                                            onChangeText={name => { this.setState({ name }) }}
                                            value={this.state.name}
                                        />
                                    </View>
                                </View>
                                <View style={{ flex: 1, margin: 32 }}>
                                    <Text style={{ fontSize: 20, color: Colors.fontGrey, marginLeft: 8 }}>Email</Text>
                                    <View style={{ borderWidth: 1, borderColor: '#ccc', height: 40, borderRadius: 8, width: '100%' }}>
                                        <TextInput
                                            style={{ height: 40, fontSize: 18, color: 'grey', outlineColor: "#ffffff", marginLeft: 8, outline: 'none' }}
                                            autoCapitalize={true}
                                            selectionColor={'red'}
                                            onChangeText={email => { this.setState({ email }) }}
                                            value={this.state.email}
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={{ flex: 2, width: '90%', padding: 32, justifyContent: 'flex-start', marginTop: -40 }}>
                                <Text style={{ fontSize: 20, color: Colors.fontGrey, marginLeft: 8 }}>Message</Text>
                                <View style={{ borderWidth: 1, borderColor: '#ccc', height: 200, borderRadius: 8 }}>
                                    <TextInput
                                        style={{ height: 182, fontSize: 18, color: 'grey', outlineColor: "#ffffff", outline: 'none', marginLeft: 8, marginTop: 8, marginRight: 8 }}
                                        autoCapitalize={true}
                                        selectionColor={'red'}
                                        multiline={true}
                                        onChangeText={message => { this.setState({ message }) }}
                                        value={this.state.message}
                                    />
                                </View>
                            </View>

                            <View style={{ flex: 1, alignItems: 'flex-end', width: '90%' }}>
                                <Hoverable
                                    onHoverIn={() => console.log('Hover_in', 'IN')}
                                    onHoverOut={() => console.log('Hover_out', 'OUT')}
                                >
                                    {isHovered => (
                                        <Ripple
                                            onPress={() => { this.setState({ showThanksModal: true }) }}
                                            style={{
                                                height: 46, width: 120, borderRadius: 8, marginTop: 36, justifyContent: 'center', margin: 16, marginRight: 32,
                                                backgroundColor: isHovered ? '#403F3F' : '#403F3F',
                                                borderWidth: 1.5,
                                                borderColor: '#403F3F'
                                            }}>
                                            <Text style={{ color: isHovered ? '#fff' : '#fff', fontSize: 18, fontWeight: 'bold', alignSelf: 'center', }}>Send</Text>
                                        </Ripple>
                                    )}
                                </Hoverable>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: '40%', height: '100%', backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                        <LottieView
                            source={require('../../../Common/Animations/teamwork.json')}
                            autoPlay
                            loop
                            resizeMode='cover'
                            style={{ bottom: 40, }}
                        />
                    </View>
                </View>

                <Modal
                    isVisible={this.state.showThanksModal}
                    onBackdropPress={() => this.setState({ showThanksModal: false })}
                >
                    <View style={{ width: win.width / 3, backgroundColor: '#fff', alignSelf: 'center', borderRadius: 12, margin: 20 }}>
                        <View style={{ margin: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <img
                                style={{ height: 280, width: 280 }}
                                src={sleepy_cat} className="sign-style" />

                            <Text style={{ fontFamily: 'Avenir', color: '#1A1A1A', fontSize: 20, textAlign: 'center' }}>Thank you for taking some time and reaching out. I will get back to you as soon as possible, Until then cheers and have a great life!</Text>

                            <Ripple
                                onPress={() => this.setState({ showThanksModal: false })}
                                style={{ margin: 20 }}>
                                <Text style={{ fontFamily: 'Avenir', color: '#1A1A1A', fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}>Okay!</Text>
                            </Ripple>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}
