import { createElement, FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { Avatar, Button, Col, Menu, Popover, Row, Select, Space, theme } from 'antd';
import { Header } from 'antd/es/layout/layout';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    AccountBookOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import { authService } from '@auth';
import { useUserContext } from '@components/user/user.context';
import { Styles } from '@library/styles';

const _TopNav: FC<{ collapsed: boolean; onCollapsed: (isCollapsed: boolean) => void }> = (
    props,
) => {
    const [collapsed, setCollapsed] = useState(props.collapsed);
    const [isHover, setIsHover] = useState(false);
    useEffect(() => {
        setCollapsed(props.collapsed);
    }, [props.collapsed]);
    const user = useUserContext();
    const { token } = theme.useToken();
    return (
        <Header
            style={{
                backgroundColor: 'transparent', // token.colorBgBase,
                borderBottom: Styles.highlightBorder,
                height: 70,
            }}
        >
            <Row>
                <Col span={8}>
                    <Row>
                        <Space size={'large'}>
                            {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: () => {
                                    setCollapsed(!collapsed);
                                    props.onCollapsed(!collapsed);
                                },
                                onMouseEnter: () => {
                                    setIsHover(true);
                                },
                                onMouseLeave: () => {
                                    setIsHover(false);
                                },
                                style: {
                                    fontSize: 18,
                                    lineHeight: 64,
                                    cursor: 'pointer',
                                    transition: 'color 0.3s',
                                    ...(isHover
                                        ? {
                                              color: token.colorPrimary,
                                          }
                                        : {}),
                                },
                            })}
                        </Space>
                    </Row>
                    {/* <Col>{showProductFilter && <ProductFilter onApply={() => {}} />}</Col> */}
                </Col>
                <Col span={8}>
                    <Row>
                        {/* <Input size="middle" placeholder="Search" prefix={<SearchOutlined />} /> */}
                    </Row>
                </Col>
                <Col span={8} dir="rtl">
                    {/* <Avatar src={user.LoggedInUser.user.pictureUrl || ''} alt="" /> */}
                    <Menu
                        mode="horizontal"
                        style={{
                            border: 'none',
                            background: 'none',
                        }}
                        items={[
                            {
                                key: '1',
                                label: (
                                    <Space>
                                        <Avatar src="https://cdn.dribbble.com/users/12620215/avatars/normal/data?1659114153"></Avatar>
                                        {user.LoggedInUser.user.name}
                                    </Space>
                                ),
                                children: [
                                    {
                                        key: '11',
                                        icon: <AccountBookOutlined />,
                                        label: 'Account',
                                    },
                                    {
                                        key: '12',
                                        icon: <LogoutOutlined />,
                                        label: 'Logout',
                                        onClick: () => {
                                            authService.logout();
                                        },
                                    },
                                ],
                            },
                        ]}
                    />
                </Col>
            </Row>
        </Header>
    );
};

export const TopNav = observer(_TopNav);
