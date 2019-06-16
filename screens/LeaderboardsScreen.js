import React, { Component } from 'react';
import { ScrollView, View } from "react-native";
import NavigationTitle from '../components/NavigationTitle';
import LeaderboardPlace from '../components/LeaderboardPlace';

const Seperator = () => <View style={{
                                borderBottomColor: "#bbb",
                                borderBottomWidth: 1
                            }}></View>

class LeaderboardsScreen extends Component {
    static navigationOptions = {
        headerTitle: <NavigationTitle text="Leaderboards"/>
    }

    getUserName = () => {
        switch(this.props.navigation.getParam("period", "week")) {
            case "week":
                return "Miroslav Patrashkov";
            case "month":
                return "Georgi Atanasov";
            case "year":
                return "Roskata"
        }
    }

    render() {
        return (
            <ScrollView>
                <LeaderboardPlace size={4} userName={this.getUserName()} points={100}/>
                <Seperator/>
                <LeaderboardPlace size={3} userName={this.getUserName()} points={100}/>
                <Seperator/>
                <LeaderboardPlace size={2} userName={this.getUserName()} points={100}/>
                <Seperator/>
                <LeaderboardPlace size={1} userName={this.getUserName()} points={100}/>
                <Seperator/>
            </ScrollView>
        )
    }
}

export default LeaderboardsScreen;