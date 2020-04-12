import React, {PureComponent} from 'react';
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
import {View, Image} from 'react-native';
import CountDown from 'react-native-countdown-component';
import TrackPlayer from 'react-native-track-player';
import {StackActions} from '@react-navigation/native';

export class ExercisePlayer extends PureComponent {
  state = {
    selectedSet: 0,
    doingSetNumber: 1,
    exercisesList: [],
    musics: [],
    pleaseWait: 'njnsj',
    timerTiming: 30,
    currentExercise: null,
  };

  componentDidMount() {
    const {route, navigation} = this.props;
    const {exercisesList, selectedSet} = route.params;

    this.setState(
      {
        selectedSet: selectedSet,
        exercisesList: exercisesList,
      },
      () => {
        this.state.musics.push(require(`../../assets/audio/track0.mp3`));
        this.state.musics.push(require(`../../assets/audio/track1.mp3`));
        this.state.musics.push(require(`../../assets/audio/track2.mp3`));
        this.state.musics.push(require(`../../assets/audio/track3.mp3`));
        this.state.musics.push(require(`../../assets/audio/track4.mp3`));
      },
    );
  }

  setExercise = i => {
    console.log(i);
    this.setState(
      {
        currentExercise: this.state.exercisesList[i],
        pleaseWait: false,
      },
      () => {
        //music On
        this.startMusic(i);

        console.log(this.state.currentExercise);
      },
    );
  };

  setBreak = () => {
    this.setState(
      {
        currentExercise: null,
        pleaseWait: true,
      },
      () => {
        //music OFF
        this.stopMusic();
      },
    );
  };

  repeat = async () => {
    return new Promise((resolutionFunc, rejectionFunc) => {
      let start = 0;
      let i = 0;
      setTimeout(() => {
        this.setExercise(i++);
        start = this.state.currentExercise.time;
        setTimeout(() => {
          this.setBreak();
          start = 400;
          setTimeout(() => {
            this.setExercise(i++);
            start = this.state.currentExercise.time;
            setTimeout(() => {
              this.setBreak();
              start = 400;
              setTimeout(() => {
                this.setExercise(i++);
                start = this.state.currentExercise.time;
                setTimeout(() => {
                  this.setBreak();
                  start = 400;
                  setTimeout(() => {
                    this.setExercise(i++);
                    start = this.state.currentExercise.time;
                    setTimeout(() => {
                      this.setBreak();
                      start = 400;
                      setTimeout(() => {
                        this.setExercise(i++);
                        start = this.state.currentExercise.time;
                        setTimeout(() => {
                          if (
                            this.state.doingSetNumber == this.state.selectedSet
                          ) {
                            const {navigation} = this.props;

                            navigation.dispatch(
                              StackActions.replace('Completed'),
                            );
                            return resolutionFunc();
                          }
                          // ALL EXERCISE SET 1 IS OVER
                          this.setState(
                            {
                              doingSetNumber: this.state.doingSetNumber + 1,
                            },
                            () => {
                              resolutionFunc();
                            },
                          );
                        }, parseInt(start));
                      }, parseInt(start));
                    }, parseInt(start));
                  }, parseInt(start));
                }, parseInt(start));
              }, parseInt(start));
            }, parseInt(start));
          }, parseInt(start));
        }, parseInt(start));
      }, parseInt(start));
    });
  };

  startExercise = async () => {
    for (let index = 1; index <= this.state.selectedSet; index++) {
      await this.repeat();
    }
  };

  startMusic = async i => {
    // Creates the player
    TrackPlayer.setupPlayer().then(async () => {
      // Adds a track to the queue
      await TrackPlayer.add({
        id: 'trackId',
        url: this.state.musics[i],
      });
      start++;
    });

    await TrackPlayer.updateOptions({
      stopWithApp: true,
      //waitForBuffer: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_STOP,
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
      ],
    });

    // Starts playing it
    TrackPlayer.play();
  };

  stopMusic = async () => {
    TrackPlayer.stop();
  };

  componentWillUnmount() {
    TrackPlayer.destroy();
  }

  millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }

  render() {
    if (!this.state.pleaseWait) {
      const {name, time, image} = this.state.currentExercise;

      return (
        <Container>
          <View>
            <Card
              style={{
                overflow: 'hidden',
              }}>
              <CardItem style={{alignSelf: 'center'}}>
                <Text>{'Set No - ' + this.state.doingSetNumber}</Text>
              </CardItem>

              <CardItem
                cardBody
                style={{
                  padding: 11,
                }}>
                <Image
                  source={image}
                  style={{height: 300, width: null, flex: 1}}
                />
              </CardItem>
              <CardItem>
                <Left>
                  <Text style={{color: 'black'}}>{name}</Text>
                </Left>
                <Right>
                  <Text style={{color: 'grey'}}>
                    {this.millisToMinutesAndSeconds(time)}
                  </Text>
                  <Text style={{color: 'grey'}}>{' MM : SS'}</Text>
                </Right>
              </CardItem>
              <CountDown
                until={parseInt(time / 1000)}
                size={30}
                onFinish={() => {}}
                digitStyle={{backgroundColor: '#2c2c2c'}}
                digitTxtStyle={{color: '#1CC625'}}
                timeToShow={['M', 'S']}
              />
              <CardItem style={{alignSelf: 'center'}}>
                <Text>to go..</Text>
              </CardItem>
            </Card>
          </View>
        </Container>
      );
    }

    if (this.state.pleaseWait == true) {
      return (
        <Container
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <CardItem style={{alignSelf: 'center'}}>
            <Text>Hold On! Its break time</Text>
          </CardItem>
          <CountDown
            until={parseInt(400 / 1000)}
            size={30}
            onFinish={() => {}}
            digitStyle={{backgroundColor: '#2c2c2c'}}
            digitTxtStyle={{color: '#1CC625'}}
            timeToShow={['M', 'S']}
          />
          <CardItem style={{alignSelf: 'center'}}>
            <Text>to go..</Text>
          </CardItem>
        </Container>
      );
    }

    return (
      <Container
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <CardItem style={{alignSelf: 'center'}}>
          <Text>Lets Get started</Text>
        </CardItem>
        <CountDown
          until={parseInt(3000 / 1000)}
          size={30}
          onFinish={() => {
            this.startExercise();
          }}
          digitStyle={{backgroundColor: '#2c2c2c'}}
          digitTxtStyle={{color: '#1CC625'}}
          timeToShow={['M', 'S']}
        />
        <CardItem style={{alignSelf: 'center'}}>
          <Text>to go..</Text>
        </CardItem>
      </Container>
    );
  }
}
