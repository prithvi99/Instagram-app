import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import colors from '../../theme/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import fonts from '../../theme/fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Comment from '../Comment/Comment';
import {IPost} from '../../types/models';
import DoublePressable from '../DoublePressable';
import Carousel from '../Carousel/Carousel';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import {useNavigation} from '@react-navigation/native';
import {FeedNavigationProp} from '../../types/navigation';

interface IFeedPost {
  post: IPost;
  isVisible: boolean;
}

const FeedPost = ({post, isVisible}: IFeedPost) => {
  const [isDescriptionExpended, setIsDescriptionExpended] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const navigation = useNavigation<FeedNavigationProp>();

  const toggleIsLiked = () => {
    setIsLiked(e => !e);
  };

  const navigateToUser = () => {
    navigation.navigate('UserProfile', {userId: post.user.id});
  };

  const navigateToComments = () => {
    navigation.navigate('Comments', {postId: post.id});
  };

  let content = null;
  if (post.image) {
    content = (
      <DoublePressable onDoublePress={toggleIsLiked}>
        <Image
          style={styles.image}
          source={{
            uri: post.image,
          }}
        />
      </DoublePressable>
    );
  } else if (post.images) {
    content = <Carousel images={post.images} onDoublePress={toggleIsLiked} />;
  } else if (post.video) {
    content = (
      <DoublePressable onDoublePress={toggleIsLiked}>
        {/* <VideoPlayer /> */}
        <VideoPlayer uri={post.video} paused={!isVisible} />
      </DoublePressable>
    );
  }

  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.Header}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.userAvatar}
        />
        <Text onPress={navigateToUser} style={styles.userName}>
          {post.user.username}
        </Text>

        <Entypo
          style={styles.threeDots}
          name="dots-three-horizontal"
          size={16}
        />
      </View>

      {/* Content */}
      {/* <DoublePressable onDoublePress={toggleIsLiked}>{content}</DoublePressable> */}
      {content}
      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleIsLiked}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              color={isLiked ? colors.accent : colors.black}
              style={styles.icon}
            />
          </Pressable>
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>Chavi</Text> and{' '}
          <Text style={styles.bold}>{post.noofLikes} others</Text>
        </Text>

        <Text
          style={styles.text}
          onPress={() => setIsDescriptionExpended(!isDescriptionExpended)}
          numberOfLines={isDescriptionExpended ? 0 : 2}>
          <Text style={styles.bold}>{post.user.username}</Text>
          {post.description}
        </Text>

        {/* Comment Section */}
        <Text
          onPress={navigateToComments}
          style={{color: 'grey', marginTop: 5, marginBottom: 2.5}}>
          View all {post.nofComments} comments
        </Text>

        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
        <Text style={{color: 'grey', marginTop: 2.5, marginBottom: 2.5}}>
          {post.createdAt}
        </Text>
      </View>
    </View>
  );
};

export default FeedPost;
