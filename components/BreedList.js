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
        return (
            <FlatList style={this.props.style}
            data={this.state.breeds}
            renderItem={({item, index}) => (
                <Text style={this.props.rowStyle}>
                    {item}
                </Text>
                )}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => <View style={this.props.separatorStyle} />}
            />
        );
    }
}