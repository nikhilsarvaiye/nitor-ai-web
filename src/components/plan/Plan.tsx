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

const schema = yup.object().shape({
    name: yup.string().nullable().required('Please provide title'),
    description: yup.string().nullable(),
});

const _Plan = () => {
    const [form] = Form.useForm();

    const onFormValueChange = (changesValues: any, values: any) => {};

    return (
        <BaseForm
            form={form}
            store={planStore as any}
            validationSchema={schema}
            onFormValueChange={onFormValueChange}
        >
            <Row>
                {/* Left */}
                <Col span={16}>
                    <PlanGeneral />
                </Col>

                {/* Right */}
                <Col span={7} offset={1}>
                    <PlanMedia />
                </Col>
            </Row>
        </BaseForm>
    );
};

const PlanGeneral = () => {
    return (
        <Card title="General">
            <Form.Item label="Title" name="name" rules={[yupSync(schema)]}>
                <Input />
            </Form.Item>
            <Form.Item label="Description" name="description" rules={[yupSync(schema)]}>
                <Input.TextArea />
            </Form.Item>
        </Card>
    );
};

const PlanMedia = observer(() => {
    return (
        <Card title="Media">
            {planStore.selectedItem.uploadStore ? (
                <Upload store={planStore.selectedItem.uploadStore} multiple />
            ) : (
                <Center>
                    <Spin spinning={true} size={'small'} />
                </Center>
            )}
        </Card>
    );
});

export const Plan = observer(_Plan);
