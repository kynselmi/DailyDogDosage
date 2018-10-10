import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import logo from './assets/PAW_LOGO.png';
import { BreedList } from './components/BreedList.js';
import styles from './styles/styles.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}> 
        <View style={styles.header}>
          <Image source={logo} style={styles.logo} />
          <Text>Daily Dog Dose</Text>
        </View>
        <ScrollView>
          <View style={styles.content}>
            <BreedList 
              style={styles.breedList}
              rowStyle={styles.breedRow}
              separatorStyle={styles.separator}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}