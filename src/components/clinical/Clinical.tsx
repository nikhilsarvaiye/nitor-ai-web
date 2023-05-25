import { observer } from 'mobx-react-lite';
import { Col, Form, Input, Row, Spin } from 'antd';
import * as yup from 'yup';
import 'react-quill/dist/quill.snow.css';
import { Card } from '@library/Card';
import { Upload } from '@library/upload';
import { clinicalStore } from '@components/clinical/InitClinical';
import { Center } from '@library/center';
import { yupSync } from '@library/util/validations';
import { BaseForm } from '@components/base/components/BaseForm';
import { ClinicalModel } from './clinical.models';

const schema = yup.object().shape({
    name: yup.string().nullable().required('Please provide title'),
    description: yup.string().nullable(),
});

const _Clinical = () => {
    const [form] = Form.useForm();

    const onFormValueChange = (changesValues: any, values: any) => {};

    return (
        <BaseForm
            form={form}
            store={clinicalStore as any}
            validationSchema={schema}
            onFormValueChange={onFormValueChange}
        >
            <Row>
                {/* Left */}
                <Col span={16}>
                    <ClinicalGeneral />
                </Col>

                {/* Right */}
                <Col span={7} offset={1}>
                    <ClinicalMedia />
                </Col>
            </Row>
        </BaseForm>
    );
};

const ClinicalGeneral = () => {
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

const ClinicalMedia = observer(() => {
    return (
        <Card title="Media">
            {clinicalStore.selectedItem.uploadStore ? (
                <Upload store={clinicalStore.selectedItem.uploadStore} multiple />
            ) : (
                <Center>
                    <Spin spinning={true} size={'small'} />
                </Center>
            )}
        </Card>
    );
});

export const Clinical = observer(_Clinical);
