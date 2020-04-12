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
import {dayWise} from '../utils/data';
import {RNNumberSelector} from 'react-native-number-selector';
import * as Animatable from 'react-native-animatable';

export class WeeklyExerciseList extends PureComponent {
  state = {
    todayDayName: '',
    exercisesList: [],
    selectedSet: 3,
  };

  componentDidMount() {
    //get day name here
    var days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    var d = new Date();
    var dayName = days[d.getDay()];
    this.setState({
      todayDayName: dayName,
      dayExerciseKey: '',
    });

    switch (dayName) {
      case 'Sunday':
        this.setState({
          exercisesList: dayWise.Sunday,
          dayExerciseKey: 'LEGS',
        });
        break;
      case 'Monday':
        this.setState({
          exercisesList: dayWise.Monday,
          dayExerciseKey: 'LEGS',
        });
        break;
      case 'Tuesday':
        this.setState({
          exercisesList: dayWise.Tuesday,
          dayExerciseKey: 'LEGS',
        });
        break;
      case 'Wednesday':
        this.setState({
          exercisesList: dayWise.Wednesday,
          dayExerciseKey: 'LEGS',
        });
        break;
      case 'Thursday':
        this.setState({
          exercisesList: dayWise.Thrusday,
          dayExerciseKey: 'LEGS',
        });
        break;
      case 'Friday':
        this.setState({
          exercisesList: dayWise.Friday,
          dayExerciseKey: 'LEGS',
        });
        break;
      case 'Saturday':
        this.setState({
          exercisesList: dayWise.Saturday,
          dayExerciseKey: 'LEGS',
        });
        break;

      default:
        break;
    }
  }

  render() {
    return (
      <Container style={{flex: 1}}>
        <Card style={{flex: 1}}>
          <CardItem style={{alignSelf: 'center'}}>
            <Text style={{textAlign: 'center'}}>
              {`Lets get started with Your ${
                this.state.todayDayName
              } Exercises - ${this.state.dayExerciseKey}`}
            </Text>
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
