import React, { Component } from 'react';
import { View, Text } from "react-native";
import * as Progress from "react-native-progress";
import Task from './Task';

class LevelInfo extends Component {
    state = {
        progressBar: 0.3
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                progressBar: 0.9
            });
        }, 3000);
    }

    render() {
        return (
            <View style={{alignItems: "center", marginTop: 10}}>
                <View style={{flexDirection: "row"}}>
                    <Text style={{fontSize: 18, flex: 0.95, textAlign: "right"}}>Level 1</Text>
                    <Text style={{fontSize: 18, flex: 0.1, textAlign: "center"}}>|</Text>
                    <Text style={{fontSize: 18, flex: 0.95}}>33/100</Text>
                </View>
                <Progress.Circle
                    animated
                    progress={this.state.progressBar}
                    color="#ff0000"
                    size={160}
                    thickness={20}
                    showsText={true}
                    style={{marginVertical: 10}}></Progress.Circle>
                <Task icon="run" points={99} description="Run 1000m" completed />
                <Task points={1} description="llllllllllong text very long so bad its so long i cant elibeiejrieo ho w lo ng gh it is jjfj " completed />
                <Task points={100} description="123" />
                <Task points={100} description="123" />
                <Task points={100} description="123" />
                <Task points={100} description="123" />
                <Task points={100} description="123" />
                <Task points={100} description="123" />
                <Task points={100} description="123" />
            </View>
        );
    }
}

export default LevelInfo;