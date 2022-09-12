import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { Home } from "../screens/Home";
import { SingIn } from "../screens/SingIn";
import { Details } from "../screens/Details";
import { Resister } from "../screens/Resister";

const {Navigator, Screen}=createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name="home" component={Home}/>
            <Screen name="new" component={Resister}/>
            <Screen name="details" component={Details}/>
        </Navigator>
    );
};