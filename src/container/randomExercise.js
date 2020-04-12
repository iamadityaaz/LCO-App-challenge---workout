import React, {PureComponent} from 'react';
import {FlatList, View} from 'react-native';
import {
  Text,
  Container,
  Content,
  Icon,
  Button,
  Card,
  CardItem,
  Body,
} from 'native-base';
import {RandomExerciseCard} from '../component/randomExercise';
import {randomExercises} from '../utils/data';
import {RNNumberSelector} from 'react-native-number-selector';
import * as Animatable from 'react-native-animatable';

export class RandomExerciseList extends PureComponent {
  state = {
    exercisesList: [],
    selectedSet: 3,
  };

  componentDidMount() {
    console.log(this.getRandom(randomExercises, 5));

    this.setState(
      {
        exercisesList: this.getRandom(randomExercises, 5),
      },
      () => {
        console.log(this.state.exercisesList);
      },
    );
  }

  getRandom(array, n) {
    // Shuffle array
    const shuffled = array.sort(() => 0.5 - Math.random());

    // Get sub-array of first n elements after shuffled
    let selected = shuffled.slice(0, n);
    return selected;
  }

  render() {
    return (
      <Container style={{flex: 1}}>
        <Card style={{flex: 1}}>
          <CardItem style={{alignSelf: 'center'}}>
            <Text>Lets get started with these Exercises</Text>
          </CardItem>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={this.state.exercisesList}
            extraData={this.state}
            renderItem={({item, index}) => {
              console.log(item);

              return <RandomExerciseCard item={item} />;
            }}
          />
        </Card>
        <Card style={{flex: 1, paddingBottom: 0, marginBottom: 0}}>
          <CardItem style={{alignSelf: 'center'}}>
            <Animatable.Text animation="zoomInUp" iterationCount={1}>
              Select Numbers of sets
            </Animatable.Text>
          </CardItem>
          <CardItem>
            <RNNumberSelector
              style={{left: 0, width: '100%', height: 50}}
              items={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
              selectedItem={3}
              spacing={50}
              highlightedFontSize={36}
              fontSize={20}
              textColor={'#345345'}
              highlightedTextColor={'#634534'}
              viewAnimation={0}
              onChange={number => {
                this.setState({
                  selectedSet: number,
                });
              }}
            />
          </CardItem>
          <CardItem
            footer
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Button
              iconRight
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
                navigation.navigate('ExercisePlayer', {
                  selectedSet: this.state.selectedSet,
                  exercisesList: this.state.exercisesList,
                });
              }}>
              <Text>Get Started</Text>
              <Icon name="arrow-forward" />
            </Button>
          </CardItem>
        </Card>
      </Container>
    );
  }
}
