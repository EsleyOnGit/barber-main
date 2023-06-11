import React from "react"
import { Text } from "react-native"
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
//import MyLocationIcon from "../../../assets/My_location.svg"
//import Search from "../Search";

export default () =>{
    return(
        <Container>
            <Scroller>
                <HeaderArea>
                    <HeaderTitle>Encontre o seu barbeiro favorito</HeaderTitle>
                    <SearchButton></SearchButton>
                </HeaderArea>

                <LocationArea>
                    <LocationInput />
                    <LocationFinder>
                        {/*<MyLocationIcon width="24" height="24" fill="#FFFFF" />*/}
                    </LocationFinder>
                </LocationArea>
            </Scroller>
        </Container>
    )
}