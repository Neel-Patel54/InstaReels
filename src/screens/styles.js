import {Dimensions, StyleSheet} from 'react-native';
const getHeigth = Dimensions.get('window').height;
const getWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    height: getHeigth,
    position: 'relative',
    width: getWidth
  },
  itemContainer: {
    height: getHeigth,
    width: getWidth
  },
  mainTxt: {
    color: 'white',
    fontSize: 20,
    left: 10,
    position: 'absolute',
    top: 10,
    zIndex: 9,
  },
  videoStyle: {
    height: getHeigth,
    width: getWidth
  },
  iconContainer: {
    left: getWidth / 2 - 15,
    position: 'absolute',
    top: getHeigth / 2 - 15,
  },
  headerIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 9,
  },
  bodyIcon: {
    marginBottom: 10,
    zIndex: 9,
  },
  bodyIconExtra: {
    marginBottom: 0
  },
  imgStyle: {
    borderRadius: 22, 
    height: 44,
    width: 44,
  },
  txt: {
    fontSize: 16,
    marginLeft: 8,
  },
  infoTxt: {
    fontSize: 14,
    marginTop: 5,
  },
  moreInfoTxt: {
    fontSize: 14,
    marginBottom: 10,
  },
  infoContainer: {
    bottom: 20,
    left: 10,
    position: 'absolute',
    width: getWidth - 40,
  },
  infoSubContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  sideMenuContainer: {
    alignItems: 'flex-end',
    bottom: 10,
    position: 'absolute',
    right: 10,
    width: 40,
  },
  sideMenuSubContainer: {
    alignItems: 'center'
  }
});
