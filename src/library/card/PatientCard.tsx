import { FC } from 'react';
import { Card } from '@library/Card';
import { CardProps, Col, Row, Space, Spin, theme, Typography } from 'antd';
import { VerticalSpace } from '@library/VerticalSpace';
import { AppColor } from '../../AppTheme';
import { PatientModel } from '@components/patient/patient.models';

export interface PatientCardProps extends CardProps {
    patient: PatientModel | any;
    theme?: AppColor;
}

export const PatientCard: FC<PatientCardProps> = (props) => {
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
                    padding: 16,
                }}
            >
                <Row justify={'space-between'} align={'middle'}>
                    <Col>
                        <Space>
                            <Typography.Text>
                                <strong
                                    style={{
                                        color: token.colorBgBase,
                                        fontSize: 16,
                                    }}
                                >
                                    {props.patient.prefix} {props.patient.firstName} {props.patient.lastName}
                                </strong>
                            </Typography.Text>
                        </Space>
                    </Col>
                    <Col>
                        <Row>
                            <Typography.Text
                                style={{
                                    fontSize: 16,
                                    color: token.colorBgBase,
                                }}
                            >
                                <strong>DOB: {props.patient.dob}</strong>
                            </Typography.Text>
                        </Row>
                    </Col>
                </Row>
                <VerticalSpace size="lg" />
                <Typography.Text
                    style={{
                        color: token.colorBgBase,
                    }}
                >
                    <strong>Gender: {props.patient.gender}</strong>
                </Typography.Text>
                <Col>
                    <Typography.Text
                        style={{
                            color: token.colorBgBase,
                        }}
                    >
                        <strong>
                            Location: {props.patient.city}, {props.patient.county}
                        </strong>
                    </Typography.Text>
                </Col>
                <Col>
                    <Typography.Text
                        style={{
                            color: token.colorBgBase,
                        }}
                    >
                        <strong>
                            Risk: {props.patient.risk}
                        </strong>
                    </Typography.Text>
                </Col>
            </Card>
        </Spin>
    );
};
