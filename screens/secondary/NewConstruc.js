import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Filters from './Filters';

const NewConstruc = () => {
    return (
        <View style={{ flex: 1 }}>
            <Filters />
            <View
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0,0,0,0.6)',
                }}
            >
                <View style={{ marginHorizontal: 12 }}>
                    <View
                        style={{
                            alignItems: 'center',
                            width: '100%',
                            backgroundColor: '#fff',
                            padding: 24,
                            borderRadius: 8,
                        }}
                    >
                        <Text style={{ fontSize: 18, fontWeight: 700 }}>New Construction</Text>
                        <View style={{ gap: 12, marginTop: 24 }}>
                            <TouchableOpacity>
                                <Text>Any</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{ color: 'blue' }}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text>No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            backgroundColor: '#fff',
                            paddingVertical: 12,
                            marginTop: 12,
                            borderRadius: 8,
                        }}
                    >
                        <Text style={{ color: 'blue', fontSize: 18 }}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default NewConstruc;
