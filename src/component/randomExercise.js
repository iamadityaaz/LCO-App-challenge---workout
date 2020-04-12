import React, {PureComponent} from 'react';
import {Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
// import Image from 'react-native-auto-height-image';

export class RandomExerciseCard extends PureComponent {
  millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }

  render() {
    const {item} = this.props;

    const {id, name, image, time} = item;
    return (
      <Card
        style={{
          width: 190,
          height: 220,
          backgroundColor: '#2f3557',
          overflow: 'hidden',
        }}>
        <CardItem
          cardBody
          style={{
            padding: 11,
            backgroundColor: '#2f3557',
          }}>
          <Image source={image} style={{height: 150, width: null, flex: 1}} />
        </CardItem>
        <CardItem
          style={{
            backgroundColor: '#2f3557',
          }}>
          <Left>
            <Text style={{color: 'white'}}>{name}</Text>
          </Left>
          <Right>
            <Text style={{color: 'grey'}}>
              {this.millisToMinutesAndSeconds(time)}
            </Text>
            <Text style={{color: 'grey'}}>{' MM : SS'}</Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}
