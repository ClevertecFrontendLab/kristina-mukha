import React from 'react';
import styles from './MenuMobile.module.scss';
import { Menu } from 'antd';
import { menuItemsArray } from '@components/menuItemsArray';

export const MenuMobileComponent: React.FC = () => {
    return (
        <>
            <Menu className={styles.menu}>
                {menuItemsArray.map((menuItem) => {
                    return <Menu.Item key={menuItem.key}>{menuItem.text}</Menu.Item>;
                })}
            </Menu>
        </>
    );
};
