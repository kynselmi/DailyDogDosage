import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import logo from './assets/PAW_LOGO.png';
import { BreedList } from './components/BreedList.js';

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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  
  header: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 30,
    paddingTop: 50,
    paddingBottom: 20,
    justifyContent: 'space-between'
  },

  content: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'white',
  },

  breedList: {
    padding: 5,
  },

  breedRow: {
    fontSize: 24, 
    padding: 15, 
    margin: 1
  },

  logo: {
    width: 30,
    height: 30
  },

  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },

});
