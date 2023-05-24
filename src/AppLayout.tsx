import { FC, ReactNode, useState } from 'react';
import { ConfigProvider, Layout } from 'antd';
import { observer } from 'mobx-react';
import { TopNav } from '@components/layout/top-nav/TopNav';
import { SideNav } from '@components/layout/side-nav/SideNav';

const { Content } = Layout;

const _AppLayout: FC<{ children: ReactNode; footer?: ReactNode }> = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <ConfigProvider>
            <Layout hasSider>
                <SideNav collapsed={collapsed} />
                <Layout>
                    <TopNav collapsed={collapsed} onCollapsed={setCollapsed} />
                    <Content
                        style={{
                            padding: '2% 3% 2% 3%',
                        }}
                    >
                        {props.children}
                    </Content>
                    {props.footer && <Layout.Footer>{props.footer}</Layout.Footer>}
                </Layout>
            </Layout>
        </ConfigProvider>
    );
};

export const AppLayout = observer(_AppLayout);
