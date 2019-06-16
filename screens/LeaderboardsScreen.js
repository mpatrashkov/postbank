import React, { Component } from 'react';
import { Text } from "react-native";
import FullHeightView from '../components/FullHeightView';
import NavigationTitle from '../components/NavigationTitle';

class LeaderboardsScreen extends Component {
    static navigationOptions = {
        headerTitle: <NavigationTitle text="Leaderboards"/>
    }

    render() {
        return (
            <FullHeightView>
                <Text>Ranklist</Text>
            </FullHeightView>
        )
    }
}

export default LeaderboardsScreen;