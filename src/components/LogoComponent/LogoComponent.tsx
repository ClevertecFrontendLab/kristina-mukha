import React from 'react';
import logo from '../../assets/img/logo.png';
import styles from './Logo.module.scss';

export const LogoComponent: React.FC = () => {
    return (
        <div className={styles.logo}>
            <img className={styles.logoImg} src={logo} />
        </div>
    );
};
