import React, {PureComponent} from 'react';
import {View, StyleSheet, Image, StatusBar} from 'react-native';
import {HeaderTitle} from '../layouts/header';
import {Text, Container, Button} from 'native-base';

export class Main extends PureComponent {
  render() {
    return (
      <Container style={styles.conatiner}>
        <View style={styles.subContainerOne}>
          <Button
            transparent
            style={{position: 'absolute', right: 0, top: 10}}
            onPress={() => {
              const {navigation} = this.props;
              navigation.navigate('About');
            }}>
            <Text>About</Text>
          </Button>
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
          <Button
            rounded
            style={{
              marginVertical: 8,
              width: '50%',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#2f3557',
            }}
            onPress={() => {
              const {navigation} = this.props;
              navigation.navigate('RandomExercise');
            }}>
            <Text>Random</Text>
          </Button>
          <Button
            rounded
            style={{
              marginVertical: 8,
              width: '50%',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#5d70f0',
            }}
            onPress={() => {
              const {navigation} = this.props;
              navigation.navigate('WeeklyExercise');
            }}>
            <Text>Weekly</Text>
          </Button>
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
