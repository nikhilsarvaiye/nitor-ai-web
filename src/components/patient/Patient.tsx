import { observer } from 'mobx-react-lite';
import { PlusOutlined } from '@ant-design/icons';
import {
    Button,
    Col,
    Form,
    Input,
    Row,
    Select,
    InputNumber,
    Checkbox,
    Divider,
    Spin,
    Table,
    Typography,
} from 'antd';
import * as yup from 'yup';
import 'react-quill/dist/quill.snow.css';
import { VerticalSpace } from '@library/VerticalSpace';
import { Card } from '@library/Card';
import { Upload } from '@library/upload';
import { patientStore } from '@components/patient/InitPatients';
import { Center } from '@library/center';
import { yupSync } from '@library/util/validations';
import { BaseForm } from '@components/base/components/BaseForm';
import { PatientModel } from './patient.models';
import { DeleteButton } from '@library/DeleteButton';

const schema = yup.object().shape({
    name: yup.string().nullable().required('Please provide Patient title'),
    description: yup.string().nullable(),
    price: yup.number().nullable().required('Please provide Patient price'),
    comparePrice: yup.number().nullable(),
    chargeTax: yup.bool().nullable(),
    cost: yup.number().nullable().required('Please provide Patient cost'),
    sku: yup.string().nullable().required('Please provide Patient SKU'),
    barcode: yup.string().nullable(),
    trackQuantity: yup.bool().nullable(),
    sellWhenOutOfStock: yup.bool().nullable(),
    quantity: yup.number().nullable().required('Please provide Patient quantity in Stock'),
    isPhysicalPatient: yup.boolean().nullable(),
    weight: yup.number().nullable(),
    weightUnit: yup.string().nullable(),
    category: yup.string().nullable().required('Please provide Patient category'),
    subCategory: yup.string().nullable().required('Please provide Patient sub category'),
    status: yup.string().nullable(),
    brand: yup.string().nullable(),
    manufacturer: yup.string().nullable(),
    vendor: yup.string().nullable(),
    collections: yup.string().nullable(),
    tags: yup.array().nullable(),
    hasOptions: yup.bool().nullable(),
    options: yup.array().nullable(),
});

const _Patient = () => {
    const [form] = Form.useForm();

    const onFormValueChange = (changesValues: any, values: any) => {};

    return (
        <BaseForm
            form={form}
            store={patientStore as any}
            validationSchema={schema}
            onFormValueChange={onFormValueChange}
        >
            <Row>
                {/* Left */}
                <Col span={16}>
                    <PatientGeneral />
                </Col>

                {/* Right */}
                <Col span={7} offset={1}>
                    <PatientMedia />
                </Col>
            </Row>
        </BaseForm>
    );
};

const PatientGeneral = () => {
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

const PatientMedia = observer(() => {
    return (
        <Card title="Media">
            {patientStore.selectedItem.uploadStore ? (
                <Upload store={patientStore.selectedItem.uploadStore} multiple />
            ) : (
                <Center>
                    <Spin spinning={true} size={'small'} />
                </Center>
            )}
        </Card>
    );
});

export const Patient = observer(_Patient);
