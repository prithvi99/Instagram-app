import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Button from '../../components/Button/Button';
import user from '../../assets/data/user.json';

const ProfileHeader = () => {
  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        <Image source={{uri: user.image}} style={styles.avatar} />

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>69</Text>
          <Text>Posts</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>69</Text>
          <Text>Fowllowers</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>69</Text>
          <Text>Fowllowing</Text>
        </View>
      </View>

      <Text style={styles.name}>{user.name}</Text>
      <Text> {user.bio} </Text>

      <View style={{flexDirection: 'row'}}>
        <Button
          text="Edit Profile"
          onPress={() => console.log('Edit Profile Button')}
        />
        <Button
          text="Different Button"
          onPress={() => console.log('Edit Profile Button')}
        />
      </View>
    </View>
  );
};
export default ProfileHeader;
