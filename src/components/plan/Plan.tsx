import { observer } from 'mobx-react-lite';
import { Col, Form, Input, Row, Spin } from 'antd';
import * as yup from 'yup';
import 'react-quill/dist/quill.snow.css';
import { Card } from '@library/Card';
import { Upload } from '@library/upload';
import { planStore } from '@components/plan/InitPlan';
import { Center } from '@library/center';
import { yupSync } from '@library/util/validations';
import { BaseForm } from '@components/base/components/BaseForm';
import { AreaChartOutlined } from '@ant-design/icons';
import { faSortAmountUp, faCoins } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VerticalSpace } from '@library/VerticalSpace';
import { MetricCard } from '@library/card/MetricCard';
import { AppColor } from './../../AppTheme';
import { PatientCard } from '@library/card/PatientCard';
import { PatientRiskData } from '@components/risk/risk.patient.service';
import { PatientInsuranceCard } from '@library/card/PatientInsuranceCard';
import { PatientDiagnosisCard } from '@library/card/PatientDiagnosisCard';

const schema = yup.object().shape({
    name: yup.string().nullable().required('Please provide title'),
    description: yup.string().nullable(),
});

const _Plan = () => {
    const [form] = Form.useForm();

    const onFormValueChange = (changesValues: any, values: any) => {};

    const patient = PatientRiskData[0];

    return (
        <BaseForm
            form={form}
            store={planStore as any}
            validationSchema={schema}
            onFormValueChange={onFormValueChange}
            saveButtonLabel="Assign"
        >
            {!planStore.loading && (
                <Col>
                    <Row>
                        <Col span={7}>
                            <PatientCard theme={AppColor.LinearBlue} patient={patient} />
                        </Col>
                        <Col span={7} offset={1}>
                            <PatientInsuranceCard theme={AppColor.LinearGreen} patient={patient} />
                        </Col>
                        <Col span={8} offset={1}>
                            <PatientDiagnosisCard theme={AppColor.LinearRed} patient={patient} />
                        </Col>
                    </Row>
                </Col>
            )}
            <VerticalSpace size="xlg" />
            <Row>
                <Col span={12}>
                    <Card title="Nursing Diagnosis">
                        <Form.Item name="diagnosis" rules={[yupSync(schema)]}>
                            <Input.TextArea rows={5} />
                        </Form.Item>
                    </Card>
                </Col>
                <Col span={11} offset={1}>
                    <Card title="Outcomes and Evaluation">
                        <Form.Item name="evaluation" rules={[yupSync(schema)]}>
                            <Input.TextArea rows={5} />
                        </Form.Item>
                    </Card>
                </Col>
            </Row>
            <VerticalSpace size="xlg" />
            <Col>
                <Card title="Interventions">
                    <Form.Item name="intervention" rules={[yupSync(schema)]}>
                        <Input.TextArea rows={5} />
                    </Form.Item>
                </Card>
            </Col>
            <VerticalSpace size="xlg" />
            <Row>
                <Col span={12}>
                    <Card title="Long Term Goal">
                        <Form.Item
                            label="Description"
                            name="longTermGoal"
                            rules={[yupSync(schema)]}
                        >
                            <Input.TextArea rows={5} />
                        </Form.Item>
                    </Card>
                </Col>
                <Col span={11} offset={1}>
                    <Card title="Short Term Goal">
                        <Form.Item
                            label="Description"
                            name="shortTermGoal"
                            rules={[yupSync(schema)]}
                        >
                            <Input.TextArea rows={5} />
                        </Form.Item>
                    </Card>
                </Col>
            </Row>
            <VerticalSpace size="xlg" />
            <Col>
                <Card>
                    <Form.Item label="Comments" name="comments" rules={[yupSync(schema)]}>
                        <Input.TextArea rows={5} />
                    </Form.Item>
                </Card>
            </Col>
        </BaseForm>
    );
};

export const Plan = observer(_Plan);
