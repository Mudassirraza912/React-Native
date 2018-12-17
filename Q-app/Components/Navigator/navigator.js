import * as Screens from './screen'
import { createDrawerNavigator, createMaterialTopTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import Login from '../Login/login'

const TabNavigator = createDrawerNavigator({
    Home: {
        screen: Screens.Home
    },
    Profile: {
        screen: Screens.Profile
    },
})

const StackNavigator = createMaterialTopTabNavigator({
    Login: {
            screen: Login
            },
    Home: {
        screen: TabNavigator
    },
    Company :{
        screen: Screens.Company
    }
},
{
    initialRouteName:'Login'
}

)
// StackNavigator.navigationOptions = ({ navigation }) => {
//     console.log(navigation)
//     let tabBarVisible = true;
//     if (navigation.state.index > 0) {
//       tabBarVisible = false;
//     }
  
//     return {
//       tabBarVisible,
//     };
//   };

StackNavigator.navigationOptions = ({navigation}) => {
    console.log(navigation)
}
const Navigator = createAppContainer(StackNavigator)

export default Navigator