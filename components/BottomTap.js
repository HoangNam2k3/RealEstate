import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HouseItem from './HouseItem';
import Houses from '../screens/Houses';
import { NavigationContainer } from '@react-navigation/native';
import Apartment from '../screens/secondary/Apartment';
import MissionBay from '../screens/secondary/MissionBay';
import Filters from '../screens/secondary/Filters';
import NewConstruc from '../screens/secondary/NewConstruc';
const Tab = createBottomTabNavigator();

export default BottomTap = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="NewConstruc">
                <Tab.Screen options={{ headerShown: false }} name="House" component={NewConstruc} />
                <Tab.Screen options={{ headerShown: false }} name="Category" component={Apartment} />
                <Tab.Screen options={{ headerShown: false }} name="Save" component={Houses} />
                <Tab.Screen options={{ headerShown: false }} name="Search" component={Houses} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
