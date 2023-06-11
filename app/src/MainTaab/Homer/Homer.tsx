import React, {useState} from "react";
import { Text } from "react-native";
import Search from "../Search";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { request, PERMISSIONS } from "react-native-permissions";
import Geolocation from "@react-native-community/geolocation";
import { Platform } from "react-native";

import {
    Container,
    Scroller,
    HeaderArea,
    HeaderTitle,
    SearchButton,
    LocationArea,
    LocationInput,
    LocationFinder
} from './styles'

export default () =>{
    const navigation = useNavigation();
    const [locationText, setLocationText] = useState('');
    const [coords, setCoords] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLocationFinder = async () =>{
        setCoords(null);
        let result = await request(Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

        if(result == 'granted'){

            setLoading(true);
            setLocationText('');
            
            Geolocation.getCurrentPosition((info)=>{
                console.log(info)
                setCoords(info.coords);
                getBarber();
            });
        }
    }

    const getBarber = async () =>{
        setLoading(true);
        setList([]);

        let res = await Api.getBarbers();
        console.log(res);

        if(res.error == ''){
            setList(res.data);
        } else{
            alert('error' + res.error);
        }
        setLoading(false);
    }

    

    <Container>
        <Scroller>
            <HeaderArea>
                <HeaderTitle numberOfLine={2}>Encontrea o seu barbeiro</HeaderTitle>
                <SearchButton onPress={() =>navigation.navegate('search')}>
                    <SearchIcon whidth="26" heigth="26" fill="#fff"></SearchIcon>
                </SearchButton>

                <locationArea>
                    <LocationInput 
                    placeholder="Onde você está?" 
                    placeholderTextColor="#FFF" 
                    value={locationText} 
                    onChangeText={t => setLocationText(t)} />

                    <LocationFinder onPress={handleLocationFinder}>
                        <MyLocationIcon width="24" heigth="24" fill="#FFF" />
                    </LocationFinder>
                </locationArea>
            </HeaderArea>
        </Scroller>
    </Container>
}

