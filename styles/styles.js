
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      backgroundColor: '#e98074',
    },
    
    header: {
      flexDirection: 'row',
      padding: 30,
      alignSelf: 'center',
    },

    logo: {
      width: 30,
      height: 30,
    },

    headerText:{
      fontSize: 30,
      paddingLeft: 10,
      textAlign: 'center',
    },
  
    content: {
      flexDirection: 'row',
      flex: 1,
      backgroundColor: '#eae7dc',
    },
  
    breedList: {
      padding: 5,
      borderWidth: 0,
    },
  
    breedRow: {
      fontSize: 24, 
      padding: 15, 
      margin: 1,
      backgroundColor: '#d8c3a5',
      borderRadius: 5,
      textAlign: 'center',
      marginHorizontal: 10,
    },
  
 /*    separator: {
      flex: 1,
      height: StyleSheet.hairlineWidth,
      backgroundColor: '#8E8E8E',
    }, */
  
     modal: {
      paddingVertical: 70,
      justifyContent: 'space-evenly',
      backgroundColor: '#eae7dc',
      alignItems: 'center',
      flexDirection: 'column',
      alignItems: 'center',
    },

    image: {
      height: 300,
      width: 300,
      alignSelf: 'center',
      margin: 20,
      borderWidth: 7,
      borderRadius: 10,
      borderColor: '#d8c3a5',
    },
    
    button: {
        backgroundColor: '#e98074',
        width: 200,
        height: 50,
        alignSelf: 'center',
        color: 'white',
        textAlign: 'center',
        fontSize: 32,
        borderRadius: 10,
    }
  
  });