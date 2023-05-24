import { FC, ReactElement } from 'react';
import { Card } from '@library/Card';
import { CardProps, Col, Row, Space, Spin, theme, Typography } from 'antd';
import { VerticalSpace } from '@library/VerticalSpace';
import { AppColor } from './../../AppTheme';

export interface MetricCardProps extends CardProps {
    title: string;
    value: string;
    numberValue?: boolean;
    icon?: ReactElement;
    theme?: AppColor;
}

export const MetricCard: FC<MetricCardProps> = (props) => {
    const { token } = theme.useToken();
    return (
        <Spin spinning={false}>
            <Card
                style={{
                    ...(props.theme ? { background: props.theme, color: token.colorBgBase } : {}),
                    ...props.style,
                }}
                highlightShadow
                bodyStyle={{
                    padding: 16
                }}
            >
                <Row justify={'space-between'} align={'middle'}>
                    <Col>
                        <Space>
                            {props.icon}
                            <Typography.Text>
                                <strong
                                    style={{
                                        color: token.colorBgBase,
                                        fontSize: 16,
                                    }}
                                >
                                    {props.title}
                                </strong>
                            </Typography.Text>
                        </Space>
                    </Col>
                    <Col>
                        <Row>
                            <Typography.Text
                                style={{
                                    fontSize: 22,
                                    color: token.colorBgBase,
                                }}
                            >
                                <strong>{props.value}</strong>
                            </Typography.Text>
                        </Row>
                    </Col>
                </Row>
                <VerticalSpace size="lg" />
                <Row justify={'space-between'}>
                    <Col>
                        <Col>Lift</Col>
                        <Col>{props.value}</Col>
                    </Col>
                    <Col dir="rtl">
                        <Col>(%) Lift</Col>
                        <Col>60%</Col>
                    </Col>
                </Row>
            </Card>
        </Spin>
    );
};
