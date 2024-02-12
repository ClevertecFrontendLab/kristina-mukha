import React from 'react';
import styles from './Menu.module.scss';
import { Menu } from 'antd';
import { CalendarTwoTone, HeartFilled, TrophyFilled, IdcardOutlined } from '@ant-design/icons';

export const MenuComponent: React.FC = () => {
    return (
        <>
            <Menu className={styles.menu}>
                <Menu.Item key='calendar' icon={<CalendarTwoTone twoToneColor='#061178' />}>
                    Календарь
                </Menu.Item>

                <Menu.Item key='workouts' icon={<HeartFilled style={{ color: '#061178' }} />}>
                    Тренировки
                </Menu.Item>

                <Menu.Item key='progress' icon={<TrophyFilled style={{ color: '#061178' }} />}>
                    Достижения
                </Menu.Item>

                <Menu.Item key='profile' icon={<IdcardOutlined style={{ color: '#061178' }} />}>
                    Профиль
                </Menu.Item>
            </Menu>
        </>
    );
};
