import React from 'react';
import { Modal, View, Text, Image, TouchableHighlight } from 'react-native';
import styles from '../styles/styles.js'

export class DogModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {image: ''}
        console.log(this.props.visibilityFunction)
    }

   async componentDidMount() {
        await fetch('https://dog.ceo/api/breed/hound/images/random')
            .then(response => response.json())
            .then(json => {
                this.setState({ image: json.message })
            });
    }

    render() {
        console.log("Modal visible: "+this.props.modalVisible)
        return (
             <View style={this.props.modal} visible={this.props.visible}>
                    <Modal
                        style={this.props.style}
                        animationType="slide"
                        transparent={false}
                        visible={this.props.modalVisible}
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
                                    onPress={ () => this.props.visibilityFunction(false) }>
                                    <Text style={styles.button}>Close</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>
                </View>
        );
    }
}