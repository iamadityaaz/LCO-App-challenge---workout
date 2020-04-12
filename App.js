/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {PureComponent} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Main,
  ExercisePlayer,
  RandomExerciseList,
  WeeklyExerciseList,
  About,
  Completed,
} from './src/index';

const Stack = createStackNavigator();

export class App extends PureComponent {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Main"
            component={Main}
          />
          <Stack.Screen
            name="ExercisePlayer"
            options={{title: 'Exercise Player'}}
            component={ExercisePlayer}
          />
          <Stack.Screen
            name="RandomExercise"
            options={{title: 'Random Exercises'}}
            component={RandomExerciseList}
          />
          <Stack.Screen
            name="WeeklyExercise"
            options={{title: 'Weekly Exercises'}}
            component={WeeklyExerciseList}
          />
          <Stack.Screen
            name="About"
            options={{title: 'About developer'}}
            component={About}
          />
          <Stack.Screen name="Completed" component={Completed} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
