import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import logo from './assets/PAW_LOGO.png';
import { BreedList } from './components/BreedList.js';
import styles from './styles/styles.js';

export default class HomeScreen extends Component {
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

                    <BreedList
                        style={styles.breedList}
                        rowStyle={styles.breedRow}
                        separatorStyle={styles.separator}
                    />

                </ScrollView>
            </View>
        );
    }
}