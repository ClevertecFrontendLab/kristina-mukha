import React from 'react';
import logo from '../../assets/img/logoSmall.png';
import styles from './LogoSmall.module.scss';

export const LogoSmallComponent: React.FC = () => {
    return (
        <div className={styles.logo}>
            <img className={styles.logoImg} src={logo} />
        </div>
    );
};
