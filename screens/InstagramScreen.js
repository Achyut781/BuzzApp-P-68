import React from 'react';
import { Text, View } from 'react-native';

export default class InstagramScreen extends React.Component{
    render(){
        return(
            <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}><Text>View your friends' Instagram posts here!</Text></View>
        )
    }
}