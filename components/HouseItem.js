import { View, Text, StyleSheet, Image } from 'react-native';

const HouseItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image source={item.img} />
            <View
                style={{
                    flex: 1,
                    marginLeft: 16,
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                }}
            >
                <View>
                    <Text style={{ fontWeight: 700, marginBottom: 8, fontSize: 18 }}>{item.tit}</Text>
                    <Text>{item.day}</Text>
                    <Text>{item.add}</Text>
                </View>
                <Text>{item.price}</Text>
            </View>
        </View>
    );
};

export default HouseItem;
const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 16,
    },
});
