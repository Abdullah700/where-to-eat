import React from "react";
import Search from "components/Search/Search";
import {useTranslation} from "react-i18next";
import styles from "./RandomLocation.module.scss";
import ChangeLang from "components/ChangeLanguge/ChangeLang";
import GMap from "components/GMap/GMap";
import RestDetails from "components/RestDetails/RestDetails";

export default () => {
    const {i18n} = useTranslation();

    return (
        <main className={`${styles["main-container"]}`} dir={i18n.dir(i18n.language)}>
            <ChangeLang color={'black'}/>
            <RestDetails/>
            <GMap/>
            <Search isLandingPage={false}/>
        </main>
    );
}
