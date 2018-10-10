import React from 'react'
import { FlatList, Text, View, Modal, TouchableHighlight, Alert, Image, StyleSheet } from 'react-native'

export class BreedList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            breeds: [],
            modalVisible: false,
            image: '',
        }
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    async componentDidMount() {
        await fetch('https://dog.ceo/api/breeds/list/all')
            .then(response => response.json())
            .then(json => {
            this.setState({ breeds: this.createBreedArray(json.message) })
        });

        await fetch('https://dog.ceo/api/breed/hound/images/random')
            .then(response => response.json())
            .then(json => {
                this.setState({ image: json.message })
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
        const styles = StyleSheet.create({
            modal: {
                borderRadius: 10,
                backgroundColor: 'green',
                alignItems: 'center',
            },
            image: {
                height: 200,
                width: 300,
            },
            button: {
                backgroundColor: 'green',
                width: 200,
                height: 50,
                alignSelf: 'center',
                color: 'white',
                textAlign: 'center',
                fontSize: 32,
                borderRadius: 10,
            },
            header: {
                textAlign: 'center',
                fontSize: 40,
            }
        })
        return (
            <View>
                <View style={this.props.modal} visible={this.state.modalVisible}>
                    <Modal
                        style={this.props.style}
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}>
                        <View style={{ marginTop: 22 }}>
                            <View>
                                <Text style={styles.header}>This is your dog of the day</Text>
                                <Image
                                    style={styles.image}
                                    source={{
                                        uri: this.state.image
                                    }}
                                />

                                <TouchableHighlight
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}>
                                    <Text style={styles.button}>Close</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>
                </View>
                
                <FlatList style={this.props.style}
                    data={this.state.breeds}
                    renderItem={({item, index}) => (
                        <TouchableHighlight onPress={() => { this.setModalVisible(true); }}>
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

const styles = StyleSheet.create({
    modal: {
        height: 300,
        width: 300,
        borderRadius: 10,
    },

});
