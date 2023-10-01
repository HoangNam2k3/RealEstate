import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import HouseItem from '../components/HouseItem';
import { Houses_DATA } from '../data';
import TopNav from '../components/TopNav';
export default function Houses() {
    return (
        <View style={styles.container}>
            <TopNav title={'Houses'} />
            {Houses_DATA.map((item) => (
                <HouseItem key={item.id} item={item} />
            ))}
        </View>
    );
}
const styles = StyleSheet.create({ container: { flex: 1, marginVertical: 48, width: '100%' } });
