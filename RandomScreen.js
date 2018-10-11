import React from 'react';
import { View, Text, Image } from 'react-native';
import logo from './assets/PAW_LOGO.png';
import styles from './styles/styles.js';

export default class RandomScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { image: '' }
    }

    async componentDidMount() {
        await fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(json => {
                this.setState({ image: json.message })
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={logo} style={styles.logo} />
                    <Text>Random Little Fluff Ball</Text>
                </View>
                <View style={styles.randomPic}>
                        <Image style={styles.randImage}
                        source={{ uri: this.state.image }}/>
                </View>
            </View>
        );
    }
}