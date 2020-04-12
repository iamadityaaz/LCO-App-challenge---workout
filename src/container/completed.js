import React, {PureComponent} from 'react';
import {View, StyleSheet, Image, StatusBar} from 'react-native';

import {Text, Container, Button} from 'native-base';

export class Completed extends PureComponent {
  render() {
    return (
      <Container style={styles.conatiner}>
        <View style={styles.subContainerOne}>
          <Image
            style={{
              height: 220,
              width: 220,
              borderRadius: 110,
              borderWidth: 4,
              borderColor: '#5d70f0',
            }}
            source={require('../../assets/images/logo.png')}
          />
        </View>
        <View style={styles.subContainerTwo}>
          <Text>You have Completed all your sets today !</Text>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  subContainerOne: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainerTwo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
