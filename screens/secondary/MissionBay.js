import { View, Text, TouchableOpacity, Image, FlatList, ScrollView, StyleSheet } from 'react-native';

const data = [
    {
        id: 1,
        txt: 'Rent or Buy',
        desc: 'Rent',
    },
    {
        id: 2,
        txt: 'Close to Public Transportation',
        desc: 'No',
    },
    {
        id: 3,
        txt: 'New Construction',
        desc: 'No',
    },
    {
        id: 4,
        txt: 'Bedrooms',
        desc: '3bd',
    },
    {
        id: 5,
        txt: 'Baths',
        desc: '3ba',
    },
];
const MissionBay = () => {
    return (
        <View>
            <View
                style={{
                    position: 'absolute',
                    top: 0,
                    zIndex: 999,
                    width: '100%',
                    flexDirection: 'row',
                    marginVertical: 44,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingVertical: 8,
                }}
            >
                <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 16, alignItems: 'center' }}>
                    <Image source={require('../../assets/backarrow.png')} />
                    <Text style={{ color: '#20C065', fontSize: 18, marginLeft: 4 }}>Home</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', marginRight: 16 }}>
                    <Image style={{ marginRight: 8 }} tintColor={'#20C065'} source={require('../../assets/edit.png')} />
                    <Image style={{ marginRight: 8 }} tintColor={'#20C065'} source={require('../../assets/edit.png')} />
                    {/* <Image source={require('../../assets/icons8-heart-filled-500 copy 2.png')} /> */}
                </View>
            </View>
            <ScrollView>
                <FlatList
                    data={[1, 2, 3, 4, 5, 6]}
                    renderItem={() => (
                        <View>
                            <Image source={require('../../assets/1.png')} />
                        </View>
                    )}
                    horizontal
                    keyExtractor={(item) => item.toString()}
                />
                <View style={{ paddingHorizontal: 16 }}>
                    <View>
                        <Text style={styles.txt}>One Mission Bay</Text>
                        <Text style={{ lineHeight: 18 }}>
                            The lush interior courtyard invites you to swim, dine or relax, while the interior amenities
                            provide numerous options for exercise, entertainment or business. Prominent design, fabulous
                            finishes & the ultimate open floor plan, this home features 3 bed, 2 bath + 2 powder rooms.
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.txt}>Location</Text>
                        <Image style={{ height: 200 }} source={require('../../assets/Map.png')} />
                    </View>
                    <View>
                        <Text style={styles.txt}>Extra info</Text>
                        <View>
                            {data.map((item) => (
                                <View
                                    key={item.id}
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        marginVertical: 12,
                                    }}
                                >
                                    <Text>{item.txt}</Text>
                                    <Text>{item.desc}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default MissionBay;
const styles = StyleSheet.create({
    txt: {
        fontSize: 18,
        marginVertical: 20,
    },
});
