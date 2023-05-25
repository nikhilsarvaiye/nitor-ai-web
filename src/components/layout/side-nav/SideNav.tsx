import { FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { Affix, ConfigProvider, Menu, theme } from 'antd';
import { AreaChartOutlined, MobileOutlined, TagOutlined, UserOutlined } from '@ant-design/icons';
import { Styles } from '@library/styles';
import Sider from 'antd/es/layout/Sider';
import { NavLink } from 'react-router-dom';
import { VerticalSpace } from '@library/VerticalSpace';
import { Logo } from '../logo/Logo';

const _SideNav: FC<{ collapsed: boolean }> = (props) => {
    const [collapsed, setCollapsed] = useState(props.collapsed);
    useEffect(() => {
        setCollapsed(props.collapsed);
    }, [props.collapsed]);
    const { token } = theme.useToken();
    return (
        <ConfigProvider
            theme={{
                components: {
                    Menu: {
                        controlHeightLG: 50,
                        fontSize: 13.5,
                        itemMarginInline: 0,
                    },
                },
                token: token,
            }}
        >
            <Affix offsetTop={0}>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    theme={'light'}
                    width={230}
                    style={{
                        borderRight: Styles.highlightBorder,
                        height: '100vh',
                    }}
                >
                    <Logo collapsed={collapsed} />
                    <VerticalSpace />
                    <Menu
                        mode="inline"
                        inlineCollapsed={collapsed}
                        defaultSelectedKeys={['patients']}
                        style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            ...(collapsed ? { fontSize: 16 } : {}),
                        }}
                    >
                        <NavLink to="/dashboard">
                            <Menu.Item
                                key={'dashboard'}
                                icon={
                                    <AreaChartOutlined style={{ fontSize: collapsed ? 20 : 16 }} />
                                }
                            >
                                Dashboard
                            </Menu.Item>
                        </NavLink>
                        <NavLink to="/patients">
                            <Menu.Item
                                key={'patients'}
                                icon={<TagOutlined style={{ fontSize: collapsed ? 18 : 14 }} />}
                            >
                                Patients
                            </Menu.Item>
                        </NavLink>
                        <NavLink to="/clinical">
                            <Menu.Item
                                key={'clinical'}
                                icon={<TagOutlined style={{ fontSize: collapsed ? 18 : 14 }} />}
                            >
                                Clinical
                            </Menu.Item>
                        </NavLink>
                        <NavLink to="/claims">
                            <Menu.Item
                                key={'claims'}
                                icon={<TagOutlined style={{ fontSize: collapsed ? 18 : 14 }} />}
                            >
                                Claims
                            </Menu.Item>
                        </NavLink>
                        <NavLink to="/users">
                            <Menu.Item
                                key={'users'}
                                icon={<UserOutlined style={{ fontSize: collapsed ? 18 : 14 }} />}
                            >
                                Users
                            </Menu.Item>
                        </NavLink>
                    </Menu>
                </Sider>
            </Affix>
        </ConfigProvider>
    );
};

export const SideNav = observer(_SideNav);
