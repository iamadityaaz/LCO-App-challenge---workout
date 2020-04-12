import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {Container} from 'native-base';

export class About extends Component {
  render() {
    return (
      <Container style={{flex: 1}}>
        <View style={styles.header} />
        <Image
          style={styles.avatar}
          source={{
            uri:
              'https://avatars3.githubusercontent.com/u/30999510?s=460&u=be2bf497147251cc3ec85c7f6bffc90ddad18e04&v=4',
          }}
        />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>Aditya Prakash</Text>
            <Text style={styles.info}>
              Mobile App Development | Web Development (Front End)
            </Text>
            <Text style={styles.description}>
              {'It took me 2 days to develop this Application'}
            </Text>
            <Text style={styles.description}>{'State - Jharkhand'}</Text>

            <TouchableOpacity style={styles.buttonContainer}>
              <Text>{'Development cost - ₹7000'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginTop: 10,
                height: 45,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 20,
                width: 250,
                borderRadius: 30,
              }}
              onPress={() => {
                Linking.openURL(
                  'https://www.youtube.com/watch?v=VFrKjhcTAzE&t=589s',
                );
              }}>
              <Text style={{color: 'blue'}}>Video link</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2f3557',
    height: 150,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 80,
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: '#5d70f0',
    marginTop: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
});
