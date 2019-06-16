import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from '../Colors';

class Task extends Component {
    textColor = (style) => {
        return {
            ...style,
            color: this.props.completed ? "#ffffff" : "#000000"
        }
    }
    render() {
        return (
            <View style={{...styles.cardContainer, backgroundColor: this.props.completed ? Colors.primary : "#ffffff"}}>
                <Text style={this.textColor(styles.pointsText)}>{this.props.points + "p"}</Text>
                {this.props.icon && <Icon name={this.props.icon} size={32} color={this.props.completed ? "white" : "black"} />}
                <Text style={this.textColor(styles.descriptionText)}>{this.props.description}</Text>
                {this.props.completed && <Icon style={{marginHorizontal: 5}} name="check-circle-outline" size={32} color="white" />}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        marginVertical: 5,
        padding: 5,
        borderRadius: 5,
        elevation: 1,
        width: "100%",
        width: "95%", 
        flexDirection: "row",
        alignItems: "center"
    },
    pointsText: {
        width: 60,
        fontSize: 20,
        textAlign: "center"
    },
    descriptionText: {
        flex: 1,
        marginLeft: 15,
        fontSize: 15
    }
});

export default Task;