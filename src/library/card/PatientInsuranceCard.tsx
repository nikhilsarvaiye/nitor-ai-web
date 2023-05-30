import { FC } from 'react';
import { Card } from '@library/Card';
import { CardProps, Col, Row, Space, Spin, theme, Typography } from 'antd';
import { VerticalSpace } from '@library/VerticalSpace';
import { AppColor } from '../../AppTheme';
import { PatientModel } from '@components/patient/patient.models';

export interface PatientInsuranceCardProps extends CardProps {
    patient: PatientModel | any;
    theme?: AppColor;
}

export const PatientInsuranceCard: FC<PatientInsuranceCardProps> = (props) => {
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
                                    Healthcare Details
                                </strong>
                            </Typography.Text>
                        </Space>
                    </Col>
                </Row>
                <VerticalSpace size="lg" />
                <Typography.Text
                    style={{
                        color: token.colorBgBase,
                    }}
                >
                    <strong>Expenses</strong>
                    <strong style={{ float: 'right' }}>
                        ${props.patient.healthcareExpenses || 0}
                    </strong>
                </Typography.Text>
                <VerticalSpace />
                <Col>
                    <Typography.Text
                        style={{
                            color: token.colorBgBase,
                        }}
                    >
                        <strong>Coverage</strong>
                        <strong style={{ float: 'right' }}>
                            ${props.patient.healthCareCoverage || 0}
                        </strong>
                    </Typography.Text>
                </Col>
            </Card>
        </Spin>
    );
};
