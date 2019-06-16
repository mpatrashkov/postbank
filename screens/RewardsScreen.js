import React, { Component } from 'react';
import { Text } from "react-native";
import FullHeightView from '../components/FullHeightView';

class RewardsScreen extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <FullHeightView>
                <Text>Rewards</Text>
            </FullHeightView>
        )
    }
}

export default RewardsScreen;