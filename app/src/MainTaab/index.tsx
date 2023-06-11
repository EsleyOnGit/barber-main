import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "./Search";
import Appointments from "./Appointments";
import Favorites from "./Favorites";
import Profile from "./Profile";
import CustomTabBar from "./CustomBar/CustomTabBar";
import Home from "../Home";


export const tab = createBottomTabNavigator();

export default () =>(
    <tab.Navigator>
        <tab.Screen name="Home" component={Home} />
        <tab.Screen name="Search" component={Search} />
        <tab.Screen name="Appointments" component={Appointments} />
        <tab.Screen name="Favorites" component={Favorites} />
        <tab.Screen name="Profile" component={Profile} />
        <tab.Screen name="CustomtabBar" component={CustomTabBar} />
    </tab.Navigator>
);