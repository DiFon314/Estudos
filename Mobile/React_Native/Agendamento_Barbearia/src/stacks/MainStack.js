import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import PreLoad from "../screens/PreLoad";
import SingIn from '../screens/SingIn';
import SingUp from '../screens/SingUp'; 
const Stack= createStackNavigator(); 

export default ()=>{
    <Stack.Navigator>
        <Stack.Screen name="PreLoad" component={PreLoad}/>
        <Stack.Screen name="SingIn" component={SingIn}/>
        <Stack.Screen name="SingUp" component={SingUp}/>
    </Stack.Navigator>
};