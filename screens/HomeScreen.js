import React, { Component } from 'react';
import { View, Text, ScrollView } from "react-native";
import FullHeightView from '../components/FullHeightView';
import NavigationTitle from '../components/NavigationTitle';
import PostBankLogo from '../components/PostBankLogo';
import LevelInfo from '../components/LevelInfo';

class HomeScreen extends Component {
    static navigationOptions = {
        title: "Home"
    }

    render() {
        return (
            <ScrollView>
                <PostBankLogo></PostBankLogo>
                <LevelInfo></LevelInfo>
            </ScrollView>
        )
    }
}

export default HomeScreen;