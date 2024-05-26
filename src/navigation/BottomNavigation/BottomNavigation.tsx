import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Search from '../../screens/Search';
import VideoDetails from '../../screens/VideoDetails';
import RenderImage from '../../components/RenderImage';
import {images} from '../../assets/images/images';
import {Image} from 'react-native';
import CreateVideo from '../../screens/CreateVideo';
import Profile from '../../screens/Profile';
import Subscribe from '../../screens/Subscribe';
import Video from 'react-native-video';

const Tab = createBottomTabNavigator();
type Props = {};

const BottomNavigation = (props: Props) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {backgroundColor: '#000', borderColor: '#000'},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={images.home}
              tintColor={focused?'blue':'#fff'}

              style={{width: 20, height: 20}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Video"
        component={Video}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={images.video}
              tintColor={focused?'blue':'#fff'}

              style={{width: 20, height: 20}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreateVideo}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <Image
              source={images.cross}
              tintColor={focused?'blue':'#fff'}

              style={{width: 30, height: 30,top:5}}
            />
          ),
        }}
      />
       <Tab.Screen
        name="Subs"
        component={Subscribe}
        options={{
          headerShown: false,
        
          tabBarIcon: ({ focused }) => (
            <Image
              source={images.subscribe}
              tintColor={focused?'blue':'#fff'}

              style={{width: 20, height: 20}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={Profile}
        options={{
          
          headerShown: false,
        
          tabBarIcon: ({ focused }) => (
            <Image
              source={images.user}
              tintColor={focused?'blue':'#fff'}
              style={{width: 20, height: 20}}
            />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
};

export default BottomNavigation;
