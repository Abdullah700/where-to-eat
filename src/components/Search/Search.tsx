import React, {useEffect, useState} from 'react'
import styles from './Search.module.scss'
import {useTranslation} from "react-i18next";
import {ReactComponent as Logo} from 'assets/svg/logo.svg';
import {useHistory} from 'react-router-dom';
import axios from 'network/api'
import {Coordination} from "interfaces/Coordination";
import {RestData} from "interfaces/RestData";

interface Props {
    isLandingPage?: boolean;
}

export default ({isLandingPage = true}: Props) => {
    const {t} = useTranslation();
    let history = useHistory();

    const [checkLocation, setCheckLocation] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if (checkLocation) {
            setIsLoading(true);
            window.navigator.geolocation.getCurrentPosition(position => {
                    const cords: Coordination = {
                        longitude: position.coords.longitude.toFixed(9),
                        latitude: position.coords.latitude.toFixed(9)
                    };
                    axios.get(`GenerateFS.php?uid=${cords.latitude},${cords.longitude}`).then((res) => {
                        const data: RestData = res.data;
                        history.push('/location', data);
                        setIsLoading(false)
                    });
                    if (errorMessage) {
                        setErrorMessage('');
                        setIsLoading(false);
                    }
                },
                err => {
                    setErrorMessage(err.message);
                    setIsLoading(false)
                });
            setCheckLocation(false)
        }
    }, [checkLocation, errorMessage, history]);
    const handlePageChange = () => {
        if (isLandingPage) {
            return (
                <div className={styles.details}>
                    <Logo className={isLoading ? 'loading' : ''} fill={'white'} width={'180px'}/>
                    <h1 className={styles['details__header']}>{t('$Where to eat')}</h1>
                </div>
            )
        }
        return
    };
    const handleNoGPS = () => {
        if (errorMessage) {
            return (
                <div className={styles.error}>
                    {t('$No GPS')}
                </div>
            )
        }
    };


    return (
        <div className={styles.container}>
            {handlePageChange()}
            <div className={`${styles['btn-grp']} ${!isLandingPage && (styles['btn-grp--abs'])}`}>
                {handleNoGPS()}
                <button onClick={() => setCheckLocation(true)}
                        className={`btn ${!isLandingPage && (styles['btn--green'])}`}>
                    {t('$Suggest')} {!isLandingPage ? t('$Another') : null}
                </button>
            </div>
        </div>
    )
};
