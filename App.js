import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import fitnesScopes from './scopes'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

import GoogleFit, { Scopes } from 'react-native-google-fit';

const options = {
    scopes: [
        Scopes.FITNESS_ACTIVITY_READ_WRITE,
        Scopes.FITNESS_BODY_READ_WRITE,
    ],
}

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: ''
        }
    }

    componentDidMount() {
        GoogleFit.authorize(options)
            .then(authResult => {
                if (authResult.success) {
                    this.setState({result: authResult})
                } else {
                    this.setState({result: authResult})
                }
            })
            .catch(() => {
                dispatch("AUTH_ERROR");
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>{JSON.stringify(this.state.result)}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
