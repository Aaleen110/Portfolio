import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
import Hoverable from "../../../Common/Class/Hoverable";
import TitleHead from '../../../Components/TitleHead';
import skills_set from '../../../Common/Raw/skills_set';
import styles from './styles';

export default class Skills extends Component {

    render() {
        return (
            <View style={{ flex: 1, }}>

                <TitleHead
                    header={"Skills"}
                    subheader={"Skills I have developed over the years"}
                    alignment={"right"}
                />

                <View style={styles.container}>

                    <View style={styles.skill_holder_container}>
                        {skills_set.map((item, index) => {
                            return index < 3 ? <Hoverable>
                                {isHovered => (
                                    <View style={styles.inner_container}>
                                        <View style={{ backgroundColor: '#ADADAD', height: 80, width: 80, borderRadius: 100, marginLeft: 12, justifyContent: 'center', alignItems: 'center' }}>
                                            <img
                                                style={{ height: 100, width: 100, alignSelf: 'center', }}
                                                src={isHovered ? item.source_hovered : item.source} />
                                        </View>
                                        <View style={{ height: '80%', width: '70%', marginLeft: 8, justifyContent: 'center' }}>
                                            <Text style={styles.text_style}>{item.name}</Text>
                                            <Text style={styles.rating_style}>{item.rating_in_words} - {item.rating}</Text>
                                        </View>
                                    </View>
                                )}
                            </Hoverable> : null
                        })}
                    </View>

                    <View style={styles.skill_holder_container}>

                        {skills_set.map((item, index) => {
                            return index > 2 && index < 6 ? <Hoverable>
                                {isHovered => (
                                    <View style={styles.inner_container}>
                                        <View style={{ backgroundColor: '#ADADAD', height: 90, width: 90, borderRadius: 100, marginLeft: 12, justifyContent: 'center', alignItems: 'center' }}>
                                            <img
                                                style={{ height: 90, width: 90, alignSelf: 'center', }}
                                                src={isHovered ? item.source_hovered : item.source} />
                                        </View>
                                        <View style={{ height: '80%', width: '70%', marginLeft: 8, justifyContent: 'center' }}>
                                            <Text style={styles.text_style}>{item.name}</Text>
                                            <Text style={styles.rating_style}>{item.rating_in_words} - {item.rating}</Text>
                                        </View>
                                    </View>
                                )}
                            </Hoverable> : null
                        })}
                    </View>

                    <View style={styles.skill_holder_container}>

                        {skills_set.map((item, index) => {
                            return index > 5 && index < 9 ? <Hoverable>
                                {isHovered => (
                                    <View style={styles.inner_container}>
                                        <View style={{ backgroundColor: '#fff', height: 90, width: 90, borderRadius: 100, marginLeft: 12, justifyContent: 'center', alignItems: 'center' }}>
                                            <img
                                                style={{ height: 90, width: 90, alignSelf: 'center', }}
                                                src={isHovered ? item.source_hovered : item.source} />
                                        </View>
                                        <View style={{ height: '80%', width: '70%', marginLeft: 8, justifyContent: 'center' }}>
                                            <Text style={styles.text_style}>{item.name}</Text>
                                            <Text style={styles.rating_style}>{item.rating_in_words} - {item.rating}</Text>
                                        </View>
                                    </View>
                                )}
                            </Hoverable> : null
                        })}
                    </View>
                </View>

            </View>
        );
    }
}
