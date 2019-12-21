import React from "react";
import {useLocation} from "react-router-dom";
import styles from './GMap.module.scss'
import {RestData} from "interfaces/RestData";
// import {GiPositionMarker} from 'react-icons/gi'


export default () => {
    const {state} = useLocation<RestData>();
    const cords = `${state.lat},${state.lon}`;
    const key = 'AIzaSyA2ma0I75ZKLCIcG5euWmc8Ec49TmMhtsI';
    return (
        <iframe
            className={styles.map}
            title={'map'}
            width="100%"
            height="100%"
            frameBorder="0" style={{border: 0}}
            src={`https://www.google.com/maps/embed/v1/place?key=${key}&q=${cords}`} allowFullScreen>
        </iframe>
    )
}
