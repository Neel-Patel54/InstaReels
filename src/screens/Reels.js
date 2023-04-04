import React, { useEffect, useState } from 'react';
import {
  Image,
  Pressable,
  Text,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Video from 'react-native-video';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { handleReelsVideo } from '../redux/video/index';
import { styles } from './styles';

const Reels = () => {
  const dispatch = useDispatch();
  const reelsVideoInformation = useSelector(
    state => state.video.reelsVideoInfo,
  );

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVideoMute, setIsVideoMute] = useState(false);
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const [reelsVideoInfo, setReelsVideoInfo] = useState({});
  const [showMute, setShowMute] = useState(false);

  useEffect(() => {
    dispatch(handleReelsVideo());
  }, []);

  useEffect(() => {
    if (reelsVideoInformation) {
      setReelsVideoInfo(reelsVideoInformation);
    }
  }, [reelsVideoInformation]);

  const handleBuffer = buffer => {
    console.log('buffer', buffer);
  };

  const handleVideoError = error => {
    console.log('error', error);
  };

  const handleVideoActiveState = () => {
    handleMute();
    setIsVideoMute(!isVideoMute);
  };

  const handleMute = () => {
    setShowMute(true);
    setTimeout(() => {
      setShowMute(false);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainTxt}>Reels</Text>
      <MaterialCommunityIcons name={'camera'} size={30} style={styles.headerIcon} />
      <SwiperFlatList
        vertical
        data={reelsVideoInfo?.hits}
        renderItem={({ item }) => {
          const indexOf = reelsVideoInfo?.hits.indexOf(item);
          const isCurrentVideoIndex = currentVideoIndex === indexOf;
          return (
            <Pressable
              style={styles.itemContainer}
              onPress={handleVideoActiveState}
              onPressOut={() => setIsVideoPaused(false)}
              onLongPress={() => setIsVideoPaused(true)}>
              {isCurrentVideoIndex && (
                <>
                  <Video
                    source={{ uri: item?.videos?.small?.url }}
                    resizeMode="cover"
                    repeat
                    paused={isVideoPaused}
                    onBuffer={handleBuffer}
                    onError={handleVideoError}
                    style={styles.videoStyle}
                    muted={isVideoMute}
                  />
                  <View style={styles.infoContainer}>
                    <View style={styles.infoSubContainer}>
                      <Image
                        source={{ uri: item?.userImageURL }}
                        style={styles.imgStyle}
                        resizeMode="contain"
                      />
                      <Text style={styles.txt}>{item?.user}</Text>
                    </View>
                    <Text style={styles.infoTxt}>{item?.tags}</Text>
                  </View>
                  <View style={styles.sideMenuContainer}>
                    <View style={styles.sideMenuSubContainer}>
                      <MaterialCommunityIcons name={'cards-heart-outline'} size={30} style={[styles.bodyIcon, styles.bodyIconExtra]} />
                      <Text style={styles.moreInfoTxt}>{item?.likes}</Text>
                    </View>
                    <View style={styles.sideMenuSubContainer}>
                      <MaterialCommunityIcons name={'chat'} size={30} style={[styles.bodyIcon, styles.bodyIconExtra]} />
                      <Text style={styles.moreInfoTxt}>{item?.comments}</Text>
                    </View>
                    <MaterialCommunityIcons name={'share'} size={30} style={styles.bodyIcon} />
                    <MaterialCommunityIcons name={'dots-horizontal'} size={30} style={styles.bodyIcon} />
                  </View>
                </>
              )}
            </Pressable>
          );
        }}
        keyExtractor={item => item.id}
        index={currentVideoIndex}
        onChangeIndex={({ index }) => setCurrentVideoIndex(index)}
      />
      {showMute && (
        <View
          style={styles.iconContainer}>
          {isVideoMute ? (
            <MaterialCommunityIcons size={35} name={'volume-off'} />
          ) : (
            <MaterialCommunityIcons size={35} name={'volume-high'} />
          )}
        </View>
      )}
    </View>
  );
};

export default Reels;
