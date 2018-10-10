

export class DogModal extends React.Component() {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        await fetch('https://dog.ceo/api/breed/hound/images/random')
            .then(response => response.json())
            .then(json => {
                this.setState({ image: json.message })
            });
    }

    render() {
        return (
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
        );
    }
}