import React, { useState } from 'react';
import { Button, Card, Layout, Typography } from 'antd';
import {
    AndroidFilled,
    AppleFilled,
    CalendarTwoTone,
    HeartFilled,
    IdcardOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';

import './MainPage.module.scss';

const { Header, Footer, Sider, Content } = Layout;
const { Text } = Typography;

import { LogoComponent } from '../../components/LogoComponent';
import { LogoSmallComponent } from '../../components/LogoSmallComponent';
import { IconExitComponent } from '../../components/IconExitComponent';
import { MenuComponent } from '../../components/MenuComponent';
import { HeaderComponent } from '../../components/HeaderComponent';
import { MenuMobileComponent } from '@components/MenuMobileComponent';

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <div className='wrapper'>
                <Layout>
                    <div className='siderFixed'>
                        <Sider className='sidebar' trigger={null} collapsible collapsed={collapsed}>
                            {collapsed ? <LogoSmallComponent /> : <LogoComponent />}
                            <MenuComponent />
                            <div
                                className='trigger triggerFlex'
                                onClick={() => setCollapsed(!collapsed)}
                            >
                                {collapsed ? (
                                    <Button
                                        className='btnExitMenu btnExitMenuCollapsed'
                                        type='text'
                                        icon={<IconExitComponent />}
                                    />
                                ) : (
                                    <Button
                                        className='btnExitMenu'
                                        type='text'
                                        icon={<IconExitComponent />}
                                    >
                                        Выход
                                    </Button>
                                )}
                            </div>

                            <div className='testBlock' data-test-id='sider-switch'>
                                {' '}
                                {collapsed ? (
                                    <div
                                        className='sidebarSwitcher sidebarSwitcherCollapsed'
                                        onClick={() => setCollapsed(!collapsed)}
                                    >
                                        <Button
                                            className='btnSidebarSwitcher'
                                            type='text'
                                            icon={<MenuUnfoldOutlined />}
                                        />
                                    </div>
                                ) : (
                                    <div
                                        className='sidebarSwitcher'
                                        onClick={() => setCollapsed(!collapsed)}
                                    >
                                        <Button
                                            className='btnSidebarSwitcher'
                                            type='text'
                                            icon={<MenuFoldOutlined />}
                                        />
                                    </div>
                                )}
                            </div>
                        </Sider>
                    </div>

                    <div className='siderFixed siderFixedMobile'>
                        <Sider
                            className='sidebar'
                            width={106}
                            trigger={null}
                            collapsible
                            collapsed={collapsed}
                            collapsedWidth='0'
                        >
                            {collapsed ? null : (
                                <>
                                    <LogoComponent />
                                    <MenuMobileComponent />
                                    <div
                                        className='trigger triggerFlex'
                                        onClick={() => setCollapsed(!collapsed)}
                                    >
                                        {collapsed ? null : (
                                            <Button
                                                className='btnExitMenu btnExitMenuMobile'
                                                type='text'
                                            >
                                                Выход
                                            </Button>
                                        )}
                                    </div>
                                </>
                            )}

                            <div className='testBlock' data-test-id='sider-switch-mobile'>
                                {' '}
                                {collapsed ? (
                                    <div
                                        className='sidebarSwitcher sidebarSwitcherCollapsed sidebarSwitcherCollapsedMobile'
                                        onClick={() => setCollapsed(!collapsed)}
                                    >
                                        <Button
                                            className='btnSidebarSwitcher'
                                            type='text'
                                            icon={<MenuUnfoldOutlined />}
                                        />
                                    </div>
                                ) : (
                                    <div
                                        className='sidebarSwitcher sidebarSwitcherMobile'
                                        onClick={() => setCollapsed(!collapsed)}
                                    >
                                        <Button
                                            className='btnSidebarSwitcher'
                                            type='text'
                                            icon={<MenuFoldOutlined />}
                                        />
                                    </div>
                                )}
                            </div>
                        </Sider>
                    </div>

                    <Layout className={collapsed ? `mainCollapsed` : `main`}>
                        <Header>
                            <HeaderComponent />
                        </Header>
                        <Content className='contentMainPage'>
                            <Card className='cardClevertecBenefits'>
                                <Text
                                    style={{
                                        color: '#061178',
                                        fontWeight: 400,
                                        fontSize: 16,
                                        lineHeight: 1.3,
                                    }}
                                >
                                    С CleverFit ты сможешь:
                                    <br />
                                    — планировать свои тренировки на календаре, выбирая тип и<br />
                                    — отслеживать свои достижения в разделе статистики, сравнивая
                                    свои результаты с нормами и рекордами;
                                    <br />
                                    — создавать свой профиль, где ты можешь загружать свои фото,
                                    видео и отзывы о тренировках;
                                    <br />— выполнять расписанные тренировки для разных частей тела,
                                    следуя подробным инструкциям и советам профессиональных
                                    тренеров.
                                </Text>
                            </Card>

                            <Card className='cardMiddle' style={{ maxWidth: 752 }}>
                                <Text
                                    style={{
                                        color: '#262626',
                                        fontWeight: 500,
                                        fontSize: 20,
                                        lineHeight: 1.3,
                                    }}
                                >
                                    CleverFit — это не просто приложение, а твой личный помощник в
                                    мире фитнеса. Не откладывай на завтра — начни тренироваться уже
                                    сегодня!
                                </Text>
                            </Card>

                            <div className='cardsActions' style={{ maxWidth: 752 }}>
                                <Card
                                    className='cardAction'
                                    title='Расписать тренировки'
                                    bordered={false}
                                >
                                    <div className='cardActionsContent'>
                                        <HeartFilled style={{ color: '#2f54eb', marginRight: 8 }} />
                                        <span style={{ color: '#2f54eb' }}>Тренировки</span>
                                    </div>
                                </Card>
                                <Card
                                    className='cardAction'
                                    title='Назначить календарь'
                                    bordered={false}
                                >
                                    <div className='cardActionsContent'>
                                        <CalendarTwoTone
                                            twoToneColor='#2f54eb'
                                            style={{ marginRight: 8 }}
                                        />
                                        <span style={{ color: '#2f54eb' }}>Календарь</span>
                                    </div>
                                </Card>
                                <Card
                                    className='cardAction'
                                    title='Заполнить профиль'
                                    bordered={false}
                                >
                                    <div className='cardActionsContent'>
                                        <IdcardOutlined
                                            style={{ color: '#2f54eb', marginRight: 8 }}
                                        />
                                        <span style={{ color: '#2f54eb' }}>Профиль</span>
                                    </div>
                                </Card>
                            </div>
                        </Content>
                        <Footer className='footer'>
                            <Button type='link' className='btnLink'>
                                Смотреть отзывы
                            </Button>
                            <Card
                                className='cardDownloadPhone'
                                title={
                                    <>
                                        <div className='blockBtnDownloadPhone'>
                                            <Button type='link' className='btnLink'>
                                                Скачать на телефон
                                            </Button>
                                        </div>
                                        <div className='btnLinkText'>
                                            <Text>Доступно в PRO-тарифе</Text>
                                        </div>
                                    </>
                                }
                                bordered={false}
                            >
                                <div className='blockDownloadPhoneOS'>
                                    <Button
                                        className='btnDownloadOS'
                                        icon={<AndroidFilled />}
                                        type='text'
                                        size='large'
                                    >
                                        Android OS
                                    </Button>

                                    <Button
                                        className='btnDownloadOS'
                                        icon={<AppleFilled />}
                                        type='text'
                                        size='large'
                                    >
                                        Apple iOS
                                    </Button>
                                </div>
                            </Card>
                        </Footer>
                    </Layout>
                </Layout>
            </div>
        </>
    );
};
