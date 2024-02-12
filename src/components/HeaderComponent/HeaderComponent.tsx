import { Breadcrumb, Button } from 'antd';
import React from 'react';
import { Typography } from 'antd';

import styles from './Header.module.scss';
import { SettingOutlined } from '@ant-design/icons';

export const HeaderComponent: React.FC = () => {
    const { Title } = Typography;

    return (
        <div className={styles.header}>
            <Breadcrumb className={styles.breadcrumb}>
                <Breadcrumb.Item className={styles.breadcrumbItem}>Главная</Breadcrumb.Item>
            </Breadcrumb>

            <div className={styles.headerContent}>
                <Title className={styles.title}>
                    Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей
                    мечты!
                </Title>
                <Button
                    className={styles.btnSettings}
                    icon={<SettingOutlined />}
                    type='text'
                    size='large'
                >
                    Настройки
                </Button>

                <Button className={styles.btnSettingsLaptop} type='text' size='large'>
                    Настройки
                </Button>

                <Button
                    className={styles.btnSettingsMobile}
                    type='text'
                    icon={<SettingOutlined />}
                    size='large'
                ></Button>
            </div>
        </div>
    );
};
