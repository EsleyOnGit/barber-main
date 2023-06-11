import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity, SafeAreaView, ScrollView } from "react-native/types";
import { styled } from "styled-components";
import { Container } from "../Homer/styles";

export default () => {
    return(
        <Container>
            <Text>Search</Text>
        </Container>
    );
};

 /*
export const Container = styled.view`
    flex: 1;
    background-color: #fff;
    color: black;
    align-items: center;
    justify-content: center;
`;
export const Text = styled.text`
    width: 24px;
    font-size: 16px;
    font-weight: bold;
    color: black;
`;*/