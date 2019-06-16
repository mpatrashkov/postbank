import React, { Component } from 'react';
import { View, Text } from "react-native";

const NavigationTitle = (props) => 
    <View style={{width: "100%", flexDirection: "row"}}>
        <Text style={{alignSelf: "center", fontSize: 20}}>{props.text}</Text>
    </View>

export default NavigationTitle;