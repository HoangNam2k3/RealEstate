import { View, Text, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'

const TopNav = ({ title }) => {
  const navigation = useNavigation();

    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 12,
                borderBottomColor: '#ccc',
                borderBottomWidth: 1,
                paddingVertical: 8,
            }}
        >
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={()=>navigation.goBack()}>
                <Image source={require('../assets/backarrow.png')} />
                <Text style={{ color: '#20C065', fontSize: 18, marginLeft: 4 }}>Home</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: '700' }}>{title}</Text>
            <View style={{ flexDirection: 'row' }}>
                <Image style={{ marginRight: 8 }} tintColor={'#20C065'} source={require('../assets/Mapbutton.png')} />
                <Image source={require('../assets/icons8-slider-500.png')} />
            </View>
        </View>
    );
};

export default TopNav;
