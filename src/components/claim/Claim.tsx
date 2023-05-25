import { observer } from 'mobx-react-lite';
import { Col, Form, Input, Row, Spin } from 'antd';
import * as yup from 'yup';
import 'react-quill/dist/quill.snow.css';
import { Card } from '@library/Card';
import { Upload } from '@library/upload';
import { claimStore } from '@components/claim/InitClaim';
import { Center } from '@library/center';
import { yupSync } from '@library/util/validations';
import { BaseForm } from '@components/base/components/BaseForm';

const schema = yup.object().shape({
    name: yup.string().nullable().required('Please provide title'),
    description: yup.string().nullable(),
});

const _Claim = () => {
    const [form] = Form.useForm();

    const onFormValueChange = (changesValues: any, values: any) => {};

    return (
        <BaseForm
            form={form}
            store={claimStore as any}
            validationSchema={schema}
            onFormValueChange={onFormValueChange}
        >
            <Row>
                {/* Left */}
                <Col span={16}>
                    <ClaimGeneral />
                </Col>

                {/* Right */}
                <Col span={7} offset={1}>
                    <ClaimMedia />
                </Col>
            </Row>
        </BaseForm>
    );
};

const ClaimGeneral = () => {
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

const ClaimMedia = observer(() => {
    return (
        <Card title="Media">
            {claimStore.selectedItem.uploadStore ? (
                <Upload store={claimStore.selectedItem.uploadStore} multiple />
            ) : (
                <Center>
                    <Spin spinning={true} size={'small'} />
                </Center>
            )}
        </Card>
    );
});

export const Claim = observer(_Claim);
