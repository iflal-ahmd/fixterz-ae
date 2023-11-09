import React, { useEffect, useState } from 'react';
import Map, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {useTheme} from "next-themes";

enum Theme {
    dark = 'dark',
    light = 'light'
}
//mapboxgl.accessToken =
export default function MapBox(){

    const {systemTheme , theme, setTheme} = useTheme();

    const [mounted, setMounted] = useState(false);

    const [styleURL, setStyleURL] = useState<string>('mapbox://styles/kamaal/clecie75d001301pa6jbp1w95')

    useEffect(() =>{
        setMounted(true);
        const currentTheme = theme === "system" ? systemTheme : theme ;
        setStyleURL(currentTheme === Theme.light ? 'mapbox://styles/kamaal/clecie75d001301pa6jbp1w95' : 'mapbox://styles/kamaal/clecldemn001e01p51l0jwmpw')
    },[systemTheme, theme])

    return(
        <div className='w-full h-[500px]'>
            <Map
                style={{width: '100%', height: 500}}
                initialViewState={{
                    longitude: 55.4102152,
                    latitude: 25.246532,
                    zoom: 14
                }}
                mapboxAccessToken="pk.eyJ1Ijoia2FtYWFsIiwiYSI6ImNpZzltZ2d6dDBxb3p1NGtqMzVqZjNrYWgifQ.5qWQL89rK4emLbp7xZLkeA"
                mapStyle={styleURL}
            >
                <Marker color={'#ffdb01'} longitude={55.4102152} latitude={25.246532} anchor="bottom" />
            </Map>
        </div>
    )
}