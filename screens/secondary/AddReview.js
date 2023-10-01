import { View, Text, TouchableOpacity, Image, TouchableOpacityBase } from 'react-native';

const AddReview = () => {
    return (
        <View
            style={{
                paddingHorizontal: 16,
                flex: 1,
                width: '100%',
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
                <Text style={{ textAlign: 'center', marginRight: '22%', fontSize: 20, fontWeight: 700 }}>
                    Add a Review
                </Text>
                <TouchableOpacity>
                    <Text style={{ color: '#20C065', fontSize: 18 }}>Done</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Image style={{ marginTop: 12, marginBottom: 24 }} source={require('../../assets/Stars.png')} />

                <Text>We’ve visited this home last week and it’s a cozy house.</Text>
            </View>
            <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                <TouchableOpacity style={{ backgroundColor: 'green', alignItems: 'center' }}>
                    <Text style={{ paddingVertical: 12, color: '#fff', fontSize: 18 }}>Add new</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AddReview;
