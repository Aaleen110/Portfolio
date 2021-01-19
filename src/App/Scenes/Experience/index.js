import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import Strings from '../../../Common/Constants/Strings'
import Hoverable from "../../../Common/Class/Hoverable";

import livehealth from '../../../Common/Assets/svgs/company/livehealth.svg'
import copious from '../../../Common/Assets/svgs/company/copious.svg'
import TitleHead from '../../../Components/TitleHead';

const win = Dimensions.get('window');

const experienceData = [
  {
    companyName: 'Copious Healthcare',
    jobRole: 'Software Developer',
    aboutCompany: Strings.aboutCopious,
    experience: Strings.copiousExperience,
    timePeriod: 'Oct 2019 - Present',
    logo: copious,
    logobw: copious,
    alignment: 'right'
  },
  {
    companyName: 'Livehealth',
    jobRole: 'Software Developer',
    aboutCompany: Strings.aboutLivehealth,
    experience: Strings.livehealthExperience,
    timePeriod: 'July 2016 - Sep 2019',
    logo: livehealth,
    logobw: livehealth,
    alignment: 'left'
  },
];

export default class Experience extends Component {

  constructor(props) {
    super(props)
    this.state = {
      experienceData: experienceData
    }
  }

  renderCopiousExperience = () => {
    const { experienceData } = this.state;
    return (
      <View style={{ height: win.height, width: win.width, flexDirection: 'row' }}>

        <Hoverable
          onHoverIn={() => console.log('Hover_in', 'IN')}
          onHoverOut={() => console.log('Hover_out', 'OUT')}
        >
          {isHovered => (
            <View style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <img
                style={{ height: 250, width: 250 }}
                src={isHovered ? experienceData[0].logo : experienceData[0].logobw} />
            </View>
          )}
        </Hoverable>


        <View style={{ width: '70%', height: '100%', justifyContent: 'center', alignItems: 'flex-end' }}>
          <View style={{ backgroundColor: "#1E1E1E", height: '70%', width: "90%", borderTopLeftRadius: 16, borderBottomLeftRadius: 16, justifyContent: 'flex-end', flexDirection: 'row' }}>

            <View style={{ height: 250, width: 280, backgroundColor: '#403F3F', borderRadius: 16, marginTop: 50, marginRight: 80, }}>
              <View style={{ marginLeft: 16, marginTop: 30 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#F7F7F7', }}>{experienceData[0].companyName}</Text>
                <Text style={{ color: '#C9C9C9' }}>{experienceData[0].jobRole}</Text>
              </View>

              <View style={{ margin: 16 }}>

                <Text style={{ color: '#C9C9C9', fontSize: 16 }}>{experienceData[0].aboutCompany}</Text>
              </View>

            </View>

            <View style={{ width: '70%', height: "100%", alignSelf: 'flex-end', justifyContent: 'center' }}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 32, color: '#fff' }}>Roles</Text>
                <Text style={{ fontSize: 18, color: '#707070', marginRight: 16 }}>{experienceData[0].timePeriod}</Text>
              </View>
              <Text style={{ fontSize: 16, color: '#fff', paddingVertical: 16, textAlign: 'start', marginRight: 20 }}>
                {experienceData[0].experience}
              </Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

  renderLhExperience = () => {
    const { experienceData } = this.state;
    return (
      <View style={{ height: win.height, width: win.width, flexDirection: 'row' }}>
        <View style={{ width: '70%', height: '100%', justifyContent: 'center', alignItems: 'flex-start' }}>
          <View style={{ backgroundColor: "#1E1E1E", height: '70%', width: "90%", borderTopRightRadius: 16, borderBottomRightRadius: 16, justifyContent: 'flex-end', flexDirection: 'row' }}>

            <View style={{ width: '70%', height: "100%", alignSelf: 'flex-end', justifyContent: 'center' }}>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 32, color: '#fff' }}>Roles</Text>
                <Text style={{ fontSize: 18, color: '#707070', marginRight: 16 }}>{experienceData[1].timePeriod}</Text>
              </View>
              <Text style={{ fontSize: 16, color: '#fff', paddingVertical: 16, textAlign: 'start', }}>
                {experienceData[1].experience}
              </Text>
            </View>

            <View style={{ height: 250, width: 280, backgroundColor: '#403F3F', borderRadius: 16, marginTop: 50, marginRight: -80, }}>
              <View style={{ marginLeft: 16, marginTop: 30 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#F7F7F7', }}>{experienceData[1].companyName}</Text>
                <Text style={{ color: '#C9C9C9' }}>{experienceData[1].jobRole}</Text>
              </View>

              <View style={{ margin: 16 }}>

                <Text style={{ color: '#C9C9C9', fontSize: 16 }}>{experienceData[1].aboutCompany}</Text>
              </View>

            </View>
          </View>
        </View>

        <Hoverable
          onHoverIn={() => console.log('Hover_in', 'IN')}
          onHoverOut={() => console.log('Hover_out', 'OUT')}
        >
          {isHovered => (
            <View style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <img
              style={{ height: 250, width: 250 }}
              src={isHovered ? experienceData[1].logo : experienceData[1].logobw} />
          </View>
          )}
        </Hoverable>

        
      </View>
    )
  }

  render() {
    return (
      <View style={{ flex: 1, }}>


        <TitleHead
          header={"Experience"}
          subheader={"Experience gained working in companies"}
          alignment={"left"}
        />

        {this.renderCopiousExperience()}
        {this.renderLhExperience()}

      </View>
    );
  }
}
