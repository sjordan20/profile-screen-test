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
    paddingRight: 10

  },

  leftHeaderBox: {
    display: 'flex',
    flexDirection: "row"

  },
  headerPic: {
    width: 25,
    height: 25,
    resizeMode: 'stretch',
    backgroundColor: 'black'
  }
})
