import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flex: 1,
    width: '100%',
    height: 50,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },

  headerText: {
    fontSize: 25,
  },

  leftHeaderBox: {
    height: '100%',
    width: 60,
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  profileContainer: {
    width: '100%',
    height: 700,
    backgroundColor: '#aeaeaeae',
    display: "flex",
    alignItems: "center"
  },

  profilePicContainer: {
    width: '95%',
    height: 250,
    backgroundColor: 'white',
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',

  },

  profileName: {
    fontSize: 22,
    fontWeight: '500',
    paddingBottom: 5
  },

  profileTitle: {
    fontSize: 18,
    color: '#aeaeae',
    fontWeight: '500'

  },

  socialLinksContainer: {
    width: '95%',
    height: 60,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,

  },

  socialIcon: {
    paddingRight: 10
  },


})
