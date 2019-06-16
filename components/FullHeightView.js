import React from "react";
import { View } from "react-native";
import styled from "styled-components";

const FullHeightView = (props) => <View style={{flex: 1}}>{props.children}</View>

export default FullHeightView;