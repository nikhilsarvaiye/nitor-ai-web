import { FC, ReactNode, useState } from 'react';
import { Affix, Col, Row, theme, Typography } from 'antd';
import { Styles } from '@library/styles';
import { VerticalSpace } from '@library/VerticalSpace';
import { AppLayout } from '../../AppLayout';

export const ContentTitle: FC<{
    title: string;
    centerContent?: ReactNode;
    rightContent?: ReactNode;
    children?: ReactNode;
}> = (props) => {
    const [affixed, setAffixed] = useState<boolean | undefined>(false);
    const { token } = theme.useToken();
    return (
        <Affix offsetTop={0} onChange={(x) => setAffixed(x)}>
            <Row
                style={{
                    ...(affixed
                        ? {
                              borderBottom: Styles.border,
                              background: token.colorBgContainer,
                              padding: '20px 46px',
                              margin: '0px -46px',
                              height: '70px',
                              ...Styles.basicBorderBoxShadow,
                          }
                        : {}),
                }}
            >
                <Col span={4}>
                    <Typography.Title
                        level={4}
                        style={{
                            margin: 0,
                        }}
                    >
                        <strong>{props.title}</strong>
                    </Typography.Title>
                </Col>
                <Col span={14} offset={1}>
                    {props.centerContent}
                </Col>
                <Col span={4} offset={1}>
                    <Row justify={'end'}>{props.rightContent}</Row>
                </Col>
            </Row>
            {/* {affixed && (
                <Row
                    style={{ height: 40, background: token.colorBgLayout, margin: '0 -40px' }}
                ></Row>
            )} */}
        </Affix>
    );
};

export const ContentFormLayout: FC<{
    title: string;
    children?: ReactNode;
    centerContent?: ReactNode;
    rightContent?: ReactNode;
    footer?: ReactNode;
}> = (props) => {
    return (
        <AppLayout footer={props.footer}>
            <Col>
                <ContentTitle
                    title={props.title}
                    centerContent={props.centerContent}
                    rightContent={props.rightContent}
                ></ContentTitle>
                <VerticalSpace />
                <Col
                    style={{
                        borderRadius: 5,
                    }}
                >
                    {props.children}
                </Col>
            </Col>
        </AppLayout>
    );
};

export const ContentListLayout: FC<{
    title: string;
    children?: ReactNode;
    headerCenterContent?: ReactNode;
    headerRightContent?: ReactNode;
}> = (props) => {
    const { token } = theme.useToken();
    return (
        <AppLayout>
            <Col>
                <ContentTitle
                    title={props.title}
                    centerContent={props.headerCenterContent}
                    rightContent={props.headerRightContent}
                />
                <VerticalSpace />
                <Col
                    style={{
                        background: token.colorBgContainer,
                        ...Styles.basicBorderBoxShadow,
                        borderRadius: 5,
                    }}
                >
                    {props.children}
                </Col>
            </Col>
        </AppLayout>
    );
};
