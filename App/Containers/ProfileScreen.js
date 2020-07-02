import React, { Component } from 'react'
import { ScrollView, Text, View, Image, Button, Alert } from 'react-native'
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

  leavingToFacebook = () =>
    Alert.alert(
      "You are Now Leaving to Facebook",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Icon name="pluscircleo" size={30} color='#949494' />
          <Text style={styles.headerText}>Contact Details</Text>
          <View style={styles.leftHeaderBox}>
            <Icon name='bells' size={30} color='#949494' />
            <Image source={{ uri: 'https://pluspng.com/img-png/png-hd-of-puppies-so-cute-puppies-image-puppy-png-puppy-png-hd-1600.png' }} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
          </View>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.profilePicContainer}>
            <Image source={{ uri: 'https://img.favpng.com/11/19/18/dog-cat-towel-puppy-pet-png-favpng-7uVBw0KAJ75pxvmdcDAzvVVD0.jpg' }} style={{ width: 150, height: 150, resizeMode: 'contain', borderRadius: 100 }} />
            <Text style={styles.profileName}>
              Nathan Garcia
            </Text>
            <Text style={styles.profileTitle}> UI/UX Designer</Text>
          </View>
          <View style={styles.socialLinksContainer}>
            <Button
              icon={
                <Icon name='facebook-square' size={40} color='#949494' style={styles.socialIcon} />
              }
              onPress={this.leavingToFacebook}
              title='facebook'
            />

            <Icon name='github' size={40} color='#949494' style={styles.socialIcon} />
            <Icon name='twitter' size={40} color='#949494' style={styles.socialIcon} />
            <Icon name='linkedin-square' size={40} color='#949494' style={styles.socialIcon} />
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
