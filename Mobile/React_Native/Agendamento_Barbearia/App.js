import React from "react";
import{NavigationContainer} from '@react-navigation/native';
import MainStacks from './src/stacks/MainStack';


export default ()=>{
  return(
    <NavigationContainer>
      <MainStacks/>
    </NavigationContainer>
  );
}
