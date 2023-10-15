import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HouseItem from './HouseItem';
import Houses from '../screens/secondary/Houses';
import { NavigationContainer } from '@react-navigation/native';
import Apartment from '../screens/secondary/Apartment';
import Home from '../screens/main/Home';
import Categories from '../screens/main/Categories';
import SavedItem from '../screens/main/SavedItem';
const Tab = createBottomTabNavigator();

export default BottomTap = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen options={{ headerShown: false }} name="Home" component={SavedItem} />
                <Tab.Screen options={{ headerShown: false }} name="Category" component={Apartment} />
                <Tab.Screen options={{ headerShown: false }} name="Save" component={Houses} />
                <Tab.Screen options={{ headerShown: false }} name="Search" component={Houses} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
