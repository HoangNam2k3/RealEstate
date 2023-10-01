import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Filters_DATA = [
    { id: 1, tit: 'Rent or Buy', desc: 'Buy' },
    { id: 2, tit: 'Square feet', desc: '500sqft - 1000 sqft' },
    { id: 3, tit: 'Bedrooms', desc: '4bd' },
    { id: 4, tit: 'Baths', desc: '4ba' },
    { id: 5, tit: 'New Construction', desc: 'Yes' },
    { id: 6, tit: 'Year Built', desc: '<2000' },
    { id: 7, tit: 'Close to Public Transportation', desc: 'Yes' },
];

const Filters = () => {
    return (
        <View
            style={{
                marginVertical: 44,
                paddingHorizontal: 16,
            }}
        >
            <View
                style={{
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginBottom: 18,
                }}
            >
                <Text style={{ textAlign: 'center', flex: 1, marginLeft: 44, fontSize: 20, fontWeight: 700 }}>
                    Filters
                </Text>
                <TouchableOpacity>
                    <Text style={{ color: '#20C065', fontSize: 18 }}>Done</Text>
                </TouchableOpacity>
            </View>
            <View>
                {Filters_DATA.map((item) => (
                    <View
                        key={item.id}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingVertical: 24,
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 1,
                        }}
                    >
                        <Text style={{ fontSize: 18 }}>{item.tit}</Text>
                        <Text style={{ fontSize: 17, color: '#ccc' }}>{item.desc}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default Filters;
