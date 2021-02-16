import React, { Component } from 'react';
import '../App.css';
import { View } from 'react-native';
import Footer from './Scenes/Footer';
import Collaborate from './Scenes/Collaborate';
import Freelancing from './Scenes/Freelancing';
import Projects from './Scenes/Projects'
import Skills from './Scenes/Skills';
import Experience from './Scenes/Experience';
import CorePrinciples from './Scenes/Core';
import About from './Scenes/About';
import Landing from './Scenes/Landing';

import firebase from "firebase/app";
import "firebase/firestore";


export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <Landing />
        <About />
        <CorePrinciples />
        <Skills />
        <Experience />
        <Projects />
        {/* <Freelancing /> */}
        <Collaborate />
        <Footer />
      </View>
    );
  }
}
