import React from 'react'
import { FlatList, Text, View, Modal, TouchableHighlight, Alert, Image, StyleSheet } from 'react-native'
import { DogModal } from './DogModal.js';
import styles from '../styles/styles.js'

export class BreedList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            breeds: [],
            modalVisible: false
        }

    }

    setModalVisible = (isVisible) => {
        this.setState({ modalVisible: isVisible });
    }

    async componentDidMount() {
        await fetch('https://dog.ceo/api/breeds/list/all')
            .then(response => response.json())
            .then(json => {
            this.setState({ breeds: this.createBreedArray(json.message) })
        });
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    createBreedArray(breedsInput) {
        let breedArray = [];
        for (breed in breedsInput) {
            let childBreeds = breedsInput[breed];
            if(childBreeds.length > 1) {
                for (let i=0; i<childBreeds.length; i++) {
                breedArray.push(this.capitalizeFirstLetter(childBreeds[i])+" "+this.capitalizeFirstLetter(breed));
                }
            } else {
            breedArray.push(this.capitalizeFirstLetter(breed));
            }
        }
        breedArray.sort();
        return breedArray;
    }

    render() {
        console.log("State: "+this.state.modalVisible);
        return (
            <View style={styles.content}>
               <DogModal style={styles.modal} modalVisible={this.state.modalVisible} visibilityFunction={this.setModalVisible}/>
                
                <FlatList style={this.props.style}
                    data={this.state.breeds}
                    renderItem={({item}) => (
                        <TouchableHighlight onPress={() => this.setModalVisible(true) }>
                            <Text style={this.props.rowStyle}>
                                {item}
                            </Text>
                        </TouchableHighlight>
                        )}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={() => <View style={this.props.separatorStyle} />}
                />
            </View>
        );
    }
}
