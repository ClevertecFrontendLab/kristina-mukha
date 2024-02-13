import React from 'react';
import styles from './Menu.module.scss';
import { Menu } from 'antd';
import { menuItemsArray } from '@components/menuItemsArray';

export const MenuComponent: React.FC = () => {
    return (
        <>
            <Menu className={styles.menu}>
                {menuItemsArray.map((menuItem) => {
                    return (
                        <Menu.Item
                            key={menuItem.key}
                            icon={menuItem.icon}
                            style={{ color: '#061178' }}
                        >
                            {menuItem.text}
                        </Menu.Item>
                    );
                })}
            </Menu>
        </>
    );
};
