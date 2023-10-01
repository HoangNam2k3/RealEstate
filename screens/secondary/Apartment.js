import { View, Text, Image } from 'react-native';
import TopNav from '../../components/TopNav';

const Apartment = () => {
    return (
        <View style={{ marginVertical: 44, flex: 1 }}>
            <TopNav title={'Apartments'} />
            <Image
                style={{ flex: 1, height: '100%', backgroundColor: 'red' }}
                source={require('../../assets/Map.png')}
            />
        </View>
    );
};

export default Apartment;
