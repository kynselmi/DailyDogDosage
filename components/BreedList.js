import React from 'react'
import { FlatList, Text, View} from 'react-native'

export class BreedList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {breeds: []}
    }
    async componentDidMount() {
        await fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(json => {
          this.setState({ breeds: json.message })
        });
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }   

    render() {
        return (
            <FlatList style={this.props.style}
            data={Object.keys(this.state.breeds)}
            renderItem={({item, index}) => (
                <Text style={this.props.rowStyle}>{this.capitalizeFirstLetter(item)+" "+this.state.breeds[item]}</Text>
                )}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => <View style={this.props.separatorStyle} />}
            />
        );
    }
}