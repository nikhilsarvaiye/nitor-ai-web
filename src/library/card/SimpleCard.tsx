import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { Card } from '@library/Card';
import { Avatar, CardProps, Col, Row, Spin, theme, Typography } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Styles } from '@library/styles';
import { AppColor } from './../../AppTheme';

export interface SimpleCardProps extends CardProps {
    pictureUrl?: string;
    icon?: ReactNode;
    value: string;
    description: string;
    change?: number;
}

export const SimpleCard: FC<SimpleCardProps> = (props) => {
    const { token } = theme.useToken();
    return (
        <Spin spinning={false}>
            <Card style={props.style} {...props} highlightShadow bodyStyle={{
                padding: 16
            }}>
                <Row justify={'start'} align={'middle'}>
                    <Col span={5}>
                        <Avatar
                            shape="square"
                            style={{
                                width: 50,
                                height: 50,
                                display: 'flex',
                                alignContent: 'center',
                                justifyContent: 'center',
                                background: token.colorBgBase,
                                color: token.colorTextBase,
                                ...Styles.basicBorderBoxShadow,
                                ...props.style,
                            }}
                            icon={props.icon}
                            src={props.pictureUrl}
                        />
                    </Col>
                    <Col span={props.change ? 11 : 17} offset={1}>
                        <Col>
                            <Typography.Text>{props.description}</Typography.Text>
                            <Typography.Title style={{ margin: 0 }} level={4}>
                                {props.value}
                            </Typography.Title>
                        </Col>
                    </Col>
                    <Col span={5} offset={2}>
                        <Row align={'bottom'} justify={'end'}>
                            <Typography.Text>
                                <strong>
                                    {props.change}
                                    {props.change && (
                                        <>
                                            %{' '}
                                            {props.change > 0 ? (
                                                <ArrowUpOutlined
                                                    style={{ color: AppColor.Green }}
                                                />
                                            ) : (
                                                <ArrowDownOutlined
                                                    style={{ color: AppColor.Red }}
                                                />
                                            )}
                                        </>
                                    )}
                                </strong>
                            </Typography.Text>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </Spin>
    );
};

export const SimpleCardOld: FC<SimpleCardProps> = (props) => {
    return (
        <Card
            className={classNames('picture-card', props.className)}
            style={props.style}
            {...props}
        >
            <div className="picture">
                <img src={props.pictureUrl} />
            </div>
            <div className="value">{props.value}</div>
            <div className="description">{props.description}</div>
        </Card>
    );
};
