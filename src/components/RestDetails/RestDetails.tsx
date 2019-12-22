import React from "react";
import styles from './RestDetails.module.scss'
import {useLocation} from "react-router-dom";
import {RestData} from "interfaces/RestData";
import {FaMapMarkedAlt} from 'react-icons/fa';
import {FiShare} from 'react-icons/fi';
import {MdFavorite, MdImage, MdInfoOutline} from 'react-icons/md';

export default () => {
    const {state} = useLocation();
    const {name, rating, cat}: RestData = state;
    return (
        <div className={styles.container}>
            <h1 className={styles.container__header}>{name}</h1>
            <span className={styles.container__rating}>{rating}/10 - {cat}</span>
            <div className={styles['container__icons-grp']}>
                <div className={styles.container__icon}>
                    <FaMapMarkedAlt/>
                </div>
                <div className={styles.container__icon}>
                    <FiShare/>
                </div>
                <div className={styles.container__icon}>
                    <MdFavorite/>
                </div>
                <div className={styles.container__icon}>
                    <MdImage/>
                </div>
                <div className={styles.container__icon}>
                    <MdInfoOutline/>
                </div>
            </div>
        </div>
    )
}
