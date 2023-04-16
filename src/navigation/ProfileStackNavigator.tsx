import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen/EditProfileScreen';
import {ProfileStackNavigatorParamList} from '../types/navigation';
// import {ProfileStackNavigatorParamList} from '../types/navigation';
// import UserFollowTabNavigator from './UserFollowTabNavigator';

const Stack = createNativeStackNavigator<ProfileStackNavigatorParamList>();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      {/* name could be UserProfile */}
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Edit Profile" component={EditProfileScreen} />
      {/* <Stack.Screen name="UserFollow" component={UserFollowTabNavigator} /> */}
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
