import React from 'react'
import {ReactComponent as Logo} from 'assets/svg/logo.svg';
import styles from './Loading.module.scss'

interface Props {
    fill?: string
}

export default ({fill = 'white'}: Props) => {
    return (
        <div className={`${styles.loading} loading`}>
            <Logo fill={fill}/>
        </div>
    )
}
