import {FlatList, ViewabilityConfig, ViewToken} from 'react-native';
import React, {useRef, useState} from 'react';
import FeedPost from '../../components/FeedPost/FeedPost';
import posts from '../../assets/data/posts.json';

const HomeScreen = () => {
  const [activePostId, setActivePostId] = useState<string | null>(null);
  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 75,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActivePostId(viewableItems[0].item.id);
      }
    },
  );
  return (
    <FlatList
      data={posts}
      renderItem={({item}) => (
        <FeedPost post={item} isVisible={activePostId === item.id} />
      )}
      showsVerticalScrollIndicator={false}
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged.current}
    />
  );
};

export default HomeScreen;