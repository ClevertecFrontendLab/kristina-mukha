import React from 'react';
import styles from './MenuMobile.module.scss';
import { Menu } from 'antd';

export const MenuMobileComponent: React.FC = () => {
    return (
        <>
            <Menu className={styles.menu}>
                <Menu.Item key='calendar'>Календарь</Menu.Item>

                <Menu.Item key='workouts'>Тренировки</Menu.Item>

                <Menu.Item key='progress'>Достижения</Menu.Item>

                <Menu.Item key='profile'>Профиль</Menu.Item>
            </Menu>
        </>
    );
};
