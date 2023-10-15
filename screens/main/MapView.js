import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import NavTop from '../../components/NavTop';
import TopNav from '../../components/TopNav';

const MapView = () => {
    const [textVisible, setTextVisible] = useState(false);

    const toggleTextVisibility = () => {
        setTextVisible(!textVisible);
    };
  return (
    <View style={{marginTop:44}}>
      <TopNav/>
      <TouchableOpacity onPress={toggleTextVisibility}>
        <Image source={require('../../assets/SanFranciscoMap.png')} style={{width:'100%'}}/>
        {textVisible && 
            <View style={styles.overlayText}>
                <Text style={{fontSize:17, color:'#4A4A4A',marginHorizontal:10,marginTop:10}}>1117 Ocean Ave #204 </Text>
                <Text style={{fontSize:13, color:'#4A4A4A',marginHorizontal:10,marginTop:10}}>The residences at Ocean Avenue West embody modern …</Text>
            </View>}

      </TouchableOpacity>
    </View>
  )
}

export default MapView
const styles= StyleSheet.create({
    overlayText: {
        position: 'absolute',
        color: 'white',
        backgroundColor:'#FFFFFF',
        top:'50%',
        left:18,
        borderRadius:10,
        paddingBottom:30,
        
    },
})
