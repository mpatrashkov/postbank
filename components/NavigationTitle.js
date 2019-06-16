import React, { Component } from 'react';
import { View, Text } from "react-native";

const NavigationTitle = (props) => 
    <View style={{flex: 1, flexDirection: "row"}}>
        <Text style={{alignSelf: "center", fontSize: 20}}>{props.text}</Text>
    </View>

export default NavigationTitle;