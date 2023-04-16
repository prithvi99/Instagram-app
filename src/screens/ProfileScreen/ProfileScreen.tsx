import {useNavigation, useRoute} from '@react-navigation/native';
import {Image, FlatList} from 'react-native';
import user from '../../assets/data/user.json';
import FeedGridView from '../../components/FeedGridView/FeedGridView';
import {
  MyProfileNavigationProp,
  MyProfileRouteProp,
  ProfileNavigationProp,
  UserProfileRouteProp,
} from '../../types/navigation';
import ProfileHeader from './ProfileHeader';

const ProfileScreen = () => {
  const route = useRoute<UserProfileRouteProp | MyProfileRouteProp>();
  const navigation = useNavigation<
    ProfileNavigationProp | MyProfileNavigationProp
  >();

  const userId = route.params?.userId;
  // navigation.setOptions({title: user.username});

  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
