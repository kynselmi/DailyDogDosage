import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
    
    header: {
      flexDirection: 'row',
      backgroundColor: 'white',
      padding: 30,
      paddingTop: 50,
      paddingBottom: 20,
      justifyContent: 'space-between'   
    },
  
    content: {
      flexDirection: 'row',
      flex: 1,
      backgroundColor: 'white',
    },
  
    breedList: {
      padding: 5,
    },
  
    breedRow: {
      fontSize: 24, 
      padding: 15, 
      margin: 1
    },
  
    logo: {
      width: 30,
      height: 30
    },
  
    separator: {
      flex: 1,
      height: StyleSheet.hairlineWidth,
      backgroundColor: '#8E8E8E',
    },
  
    modal: {
      height: 300,
      width: 300,
      borderRadius: 10,
    },
     image: {
        height: 200,
        width: 300,
    },

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
    }
  
  });