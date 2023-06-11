import { useNavigation } from "@react-navigation/native";
import Geolocation from "@react-native-community/geolocation";
import { request, PERMISSIONS } from "react-native-permissions";
import MapView, { Marker } from "react-native-maps";
import { categories } from "./categories";

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity, SafeAreaView, ScrollView } from "react-native/types";
import { styled } from "styled-components";
import { Container,
    Scroller,
    HeaderArea,
    HeaderTitle,
    SearchButton,
    LocationArea,
    LocationInput,
    LocationFinder
} from "./styles";

export default HomeScreen () => {
    return(
        <Container>
        <Scroller>
            <HeaderArea>
                <HeaderTitle >Encontrea o seu barbeiro</HeaderTitle>
                <SearchButton >
                    
                </SearchButton>

                <LocationArea>
                    <LocationInput 
                   />

                    <LocationFinder >
                        
                    </LocationFinder>
                </LocationArea>
            </HeaderArea>
        </Scroller>
    </Container>
    );
};