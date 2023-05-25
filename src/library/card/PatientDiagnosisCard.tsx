import { FC } from 'react';
import { Card } from '@library/Card';
import { CardProps, Col, Row, Space, Spin, theme, Typography } from 'antd';
import { VerticalSpace } from '@library/VerticalSpace';
import { AppColor } from '../../AppTheme';
import { PatientModel } from '@components/patient/patient.models';

export interface PatientDiagnosisCardProps extends CardProps {
    patient: PatientModel | any;
    theme?: AppColor;
}

export const PatientDiagnosisCard: FC<PatientDiagnosisCardProps> = (props) => {
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
                                    Medical Details
                                </strong>
                            </Typography.Text>
                        </Space>
                    </Col>
                </Row>
                <VerticalSpace size="lg" />
                <Col style={{ width: '92%', height: '20px', overflow: 'hidden' }}>
                    <Typography.Text
                        style={{
                            color: token.colorBgBase,
                        }}
                    >
                        <strong>{props.patient.iCondDesc}</strong>
                    </Typography.Text>
                </Col>
                <VerticalSpace />
                <Col style={{ width: '92%', height: '20px', overflow: 'hidden' }}>
                    <Typography.Text
                        style={{
                            color: token.colorBgBase,
                        }}
                    >
                        <strong>{props.patient.iMedReasonDesc}</strong>
                    </Typography.Text>
                </Col>
            </Card>
        </Spin>
    );
};
