import React, { Component } from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import Icon from 'react-native-vector-icons/AntDesign'
// Styles
import styles from './Styles/ProfileScreenStyle'


class ProfileScreen extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Icon name="pluscircleo" size={30} color='#949494' />
          <Text>Contact Details</Text>
          <View style={styles.leftHeaderBox}>
            <Icon name='bells' size={30} color='#949494' />
            <Image source={{ uri: 'https://pluspng.com/img-png/png-hd-of-puppies-so-cute-puppies-image-puppy-png-puppy-png-hd-1600.png' }} style={styles.headerPic} />

          </View>

        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
