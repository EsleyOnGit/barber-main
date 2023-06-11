import React from "react";
import { styled } from "styled-components";

export const Container = styled.SafeAreaViewview`
    flex: 1;
    background-color: #fff;
    color: black;
    align-items: center;
    justify-content: center;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
`;
export const HeaderArea1 = styled.view`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const HeaderTitle = styled.text`
    width: 250px;
    font-size: 24px;
    font-weight: bold;
    color: #FFF;
`;
export const SearchButton = styled.TouchableOpacity`
    width: 26px;
    height: 26px;
`;
export const LocationArea = styled.view`
    background-color: #4EADBE;
    height: 60px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 30px;
`;
export const LocationInput = styled.text`
    flex: 1;
    font-size: 16px;
    color: #FFFFFF;
`;
export const LocationFinder = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
`;