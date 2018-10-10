import React from 'react'
import { FlatList, Text} from 'react-native'

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
            renderItem={({item}) => (
                <Text style={this.props.rowStyle}>{this.capitalizeFirstLetter(item)}</Text>
                )}
            />
        );
    }
}