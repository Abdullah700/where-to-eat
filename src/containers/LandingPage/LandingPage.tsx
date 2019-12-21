import React, {FC} from 'react';
import styles from 'containers/LandingPage/LandingPage.module.scss';
import {useTranslation} from 'react-i18next';
import ChangeLang from "components/ChangeLanguge/ChangeLang";
import Search from "components/Search/Search";

const LandingPage: FC = () => {
    const {i18n} = useTranslation();
    return (
        <main className={`${styles["main-container"]}`} dir={i18n.dir(i18n.language)}>
            <ChangeLang/>
            <Search/>
        </main>
    );
};

export default LandingPage;
