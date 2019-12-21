import React, {Fragment} from 'react';
import {useTranslation} from 'react-i18next';
import {MdLanguage} from 'react-icons/md';

import styles from './ChangeLang.module.scss';

interface Props {
    color?: string
}

export default ({color = 'white'}: Props) => {
    const {i18n} = useTranslation();
    const handelLang = () => {
        if (i18n.language === 'ar') {
            i18n.changeLanguage('en').then()
        } else {
            i18n.changeLanguage('ar').then()
        }
    };


    return (
        <Fragment>
            <MdLanguage color={color} className={styles.icon} onClick={() => handelLang()} size={28}/>
        </Fragment>
    )
}
