import { useMemo } from "react";
import { GoogleMap, useLoadScript, Maker } from "@react-google-maps/api";

export default function Home(){
    const { isLoaded } = useLoadScript({
       API KEY is here,
    });

    if(!isLoaded) return <div>Loadin ...</div>;
    return <Map />;
}

function Map(){
    const center = useMemo(() => ({lat: -44, lng: -80}), []);
    return(
        <GoogleMap 
        zoom={10}
        center={center}
        mapContainerClassName="Map-container"
        >
            <maker position={{lat: -44, lng: -80}} />
        </GoogleMap>
    )
}
