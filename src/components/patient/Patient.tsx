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

    const onFormValueChange = (changesValues: any, values: any) => {
        if (changesValues.options) {
            const model = patientStore.setVariants(values as PatientModel);
            form.setFieldsValue(model);
        }
    };

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
                    <VerticalSpace size="lg" />
                    <PatientPricing />
                    <VerticalSpace size="lg" />
                    <PatientInventory />
                    <VerticalSpace size="lg" />
                    <PatientDetails />
                </Col>

                {/* Right */}
                <Col span={7} offset={1}>
                    <PatientMedia />
                    <PatientShipping />
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

const PatientDetails = () => {
    return (
        <Card title="Additional Details">
            <PatientDetailsSection />
            <VerticalSpace size="lg" />
            <PatientFeaturesSection />
        </Card>
    );
};

const PatientDetailsSection = () => {
    const formItemStyle = {
        margin: 0,
    };
    return (
        <Form.List name="details">
            {(details, { add, remove }, { errors }) => (
                <Card
                    type="inner"
                    title={
                        <Row justify={'space-between'}>
                            <Typography.Text>Details</Typography.Text>
                            <Button
                                onClick={() => {
                                    add();
                                }}
                                type="link"
                                icon={<PlusOutlined />}
                            >
                                Add
                            </Button>
                        </Row>
                    }
                >
                    <>
                        <Table
                            showHeader={false}
                            columns={[
                                {
                                    title: 'Heading',
                                    dataIndex: 'heading',
                                    render: (value, record, index) => {
                                        return (
                                            <Form.Item
                                                name={[index, 'name']}
                                                isListField
                                                {...value}
                                                validateTrigger={['onChange', 'onBlur']}
                                                style={formItemStyle}
                                            >
                                                <Input placeholder="Heading" />
                                            </Form.Item>
                                        );
                                    },
                                },
                                {
                                    title: 'Name',
                                    dataIndex: 'name',
                                    render: (value, record, index) => {
                                        return (
                                            <Form.Item
                                                name={[index, 'name']}
                                                isListField
                                                {...value}
                                                validateTrigger={['onChange', 'onBlur']}
                                                style={formItemStyle}
                                            >
                                                <Input placeholder="Name" />
                                            </Form.Item>
                                        );
                                    },
                                },
                                {
                                    title: 'Value',
                                    dataIndex: 'value',
                                    render: (value, record, index) => {
                                        return (
                                            <Form.Item
                                                name={[index, 'value']}
                                                isListField
                                                {...value}
                                                validateTrigger={['onChange', 'onBlur']}
                                                style={formItemStyle}
                                            >
                                                <Input placeholder="Value" />
                                            </Form.Item>
                                        );
                                    },
                                },
                                {
                                    title: 'Delete',
                                    dataIndex: 'delete',
                                    render: (value, record, index) => {
                                        return <DeleteButton onClick={() => remove(index)} />;
                                    },
                                },
                            ]}
                            pagination={{
                                hideOnSinglePage: true,
                            }}
                            dataSource={details}
                        ></Table>
                    </>
                </Card>
            )}
        </Form.List>
    );
};

const PatientFeaturesSection = () => {
    const formItemStyle = {
        margin: 0,
    };
    return (
        <Form.List name="features">
            {(features, { add, remove }, { errors }) => (
                <Card
                    type="inner"
                    title={
                        <Row justify={'space-between'}>
                            <Typography.Text>Features</Typography.Text>
                            <Button
                                onClick={() => {
                                    add();
                                }}
                                type="link"
                                icon={<PlusOutlined />}
                            >
                                Add
                            </Button>
                        </Row>
                    }
                >
                    <>
                        <Table
                            showHeader={false}
                            columns={[
                                {
                                    title: 'Name',
                                    dataIndex: 'name',
                                    render: (value, record, index) => {
                                        return (
                                            <Form.Item
                                                name={[index, 'name']}
                                                isListField
                                                {...value}
                                                validateTrigger={['onChange', 'onBlur']}
                                                style={formItemStyle}
                                            >
                                                <Input placeholder="Feature" />
                                            </Form.Item>
                                        );
                                    },
                                },
                                {
                                    title: 'Value',
                                    dataIndex: 'value',
                                    render: (value, record, index) => {
                                        return (
                                            <Form.Item
                                                name={[index, 'value']}
                                                isListField
                                                {...value}
                                                validateTrigger={['onChange', 'onBlur']}
                                                style={formItemStyle}
                                            >
                                                <Input placeholder="Value" />
                                            </Form.Item>
                                        );
                                    },
                                },
                                {
                                    title: 'Delete',
                                    dataIndex: 'delete',
                                    render: (value, record, index) => {
                                        return <DeleteButton onClick={() => remove(index)} />;
                                    },
                                },
                            ]}
                            pagination={{
                                hideOnSinglePage: true,
                            }}
                            dataSource={features}
                        ></Table>
                    </>
                </Card>
            )}
        </Form.List>
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

const PatientPricing = () => {
    return (
        <Card title="Pricing">
            <Row justify={'space-between'}>
                <Col span={11}>
                    <Form.Item label="Price" name="price" rules={[yupSync(schema)]}>
                        <InputNumber
                            style={{
                                width: '100%',
                            }}
                            placeholder="₹ 0.0"
                        />
                    </Form.Item>
                </Col>
                <Col span={11} offset={2}>
                    <Form.Item
                        label="Discount/Compare Price"
                        name="comparePrice"
                        rules={[yupSync(schema)]}
                    >
                        <InputNumber
                            style={{
                                width: '100%',
                            }}
                            placeholder="₹ 0.0"
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item name="chargeTax" valuePropName="checked" rules={[yupSync(schema)]}>
                <Checkbox>Charge tax on this Patient</Checkbox>
            </Form.Item>
            <Divider />
            <Form.Item label="Cost per item" name="cost" rules={[yupSync(schema)]}>
                <InputNumber
                    style={{
                        width: '100%',
                    }}
                    placeholder="₹ 0.0"
                />
            </Form.Item>
        </Card>
    );
};

const PatientInventory = () => {
    return (
        <Card title="Inventory">
            <Row justify={'space-between'}>
                <Form.Item label="SKU (Stock Keeping Unit)" name="sku" rules={[yupSync(schema)]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Barcode (ISBN, UPC, GTIN, etc.)"
                    name="barcode"
                    rules={[yupSync(schema)]}
                >
                    <Input />
                </Form.Item>
            </Row>
            <Form.Item name="trackQuantity" valuePropName="checked" rules={[yupSync(schema)]}>
                <Checkbox>Track Quantity</Checkbox>
            </Form.Item>
            <Form.Item name="sellWhenOutOfStock" valuePropName="checked" rules={[yupSync(schema)]}>
                <Checkbox>Continue selling when out of stock</Checkbox>
            </Form.Item>
            <Divider />
            <Form.Item label="Quantity Available" name="quantity" rules={[yupSync(schema)]}>
                <InputNumber
                    style={{
                        width: '100%',
                    }}
                />
            </Form.Item>
        </Card>
    );
};

const PatientShipping = () => {
    return (
        <Card title="Shipping">
            <Form.Item name="isPhysicalPatient" valuePropName="checked" rules={[yupSync(schema)]}>
                <Checkbox>This is a physical patient</Checkbox>
            </Form.Item>
            <Divider />
            <Row justify={'start'}>
                <Form.Item label="Weight" name="weight" rules={[yupSync(schema)]}>
                    <InputNumber
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>
                <Form.Item
                    label="Unit"
                    name="weightUnit"
                    rules={[yupSync(schema)]}
                    style={{
                        marginLeft: 20,
                    }}
                >
                    <Select placeholder="Unit">
                        {['kg', 'pound'].map((x) => {
                            return (
                                <Select.Option value={x} title={x} key={x}>
                                    {x}
                                </Select.Option>
                            );
                        })}
                    </Select>
                </Form.Item>
            </Row>
        </Card>
    );
};


export const Patient = observer(_Patient);
