import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const NavTop = () => {
  return (
    <View style={{marginVertical:30, marginHorizontal:10}}>
      <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>
        <TouchableOpacity>
            <Image source={require('../assets/Profilepicture.png')}/>
        </TouchableOpacity>
        <Text style={{fontSize:17, fontWeight:'700'}}>Home</Text>
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity>
                <Image source={require('../assets/Addnewbutton.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:10}}>
                <Image source={require('../assets/Mapbutton.png')}/>
            </TouchableOpacity>  
        </View>
      </View>
    </View>
  )
}

export default NavTop