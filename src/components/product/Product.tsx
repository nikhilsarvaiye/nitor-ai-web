import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { DeleteFilled, PlusOutlined } from '@ant-design/icons';
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
    Tooltip,
    Table,
    Typography,
} from 'antd';
import * as yup from 'yup';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { VerticalSpace } from '@library/VerticalSpace';
import { Card } from '@library/Card';
import { Upload } from '@library/upload';
import { productStore } from '@components/product/InitProducts';
import { Center } from '@library/center';
import { yupSync } from '@library/util/validations';
import { BaseForm } from '@components/base/components/BaseForm';
import { ProductTags } from './ProductTags';
import { ProductCategoryPicker } from './pickers';
import { ProductTypePicker } from './pickers/ProductTypePicker';
import { ProductStatus } from './pickers/ProductStatus';
import { ProductOptions } from './pickers/ProductOptions';
import { ProductModel } from './product.models';
import useFormInstance from 'antd/es/form/hooks/useFormInstance';
import { DeleteButton } from '@library/DeleteButton';
import { RichTextArea } from '@library/RichTextArea';

const schema = yup.object().shape({
    name: yup.string().nullable().required('Please provide Product title'),
    description: yup.string().nullable(),
    price: yup.number().nullable().required('Please provide Product price'),
    comparePrice: yup.number().nullable(),
    chargeTax: yup.bool().nullable(),
    cost: yup.number().nullable().required('Please provide Product cost'),
    sku: yup.string().nullable().required('Please provide Product SKU'),
    barcode: yup.string().nullable(),
    trackQuantity: yup.bool().nullable(),
    sellWhenOutOfStock: yup.bool().nullable(),
    quantity: yup.number().nullable().required('Please provide Product quantity in Stock'),
    isPhysicalProduct: yup.boolean().nullable(),
    weight: yup.number().nullable(),
    weightUnit: yup.string().nullable(),
    category: yup.string().nullable().required('Please provide Product category'),
    subCategory: yup.string().nullable().required('Please provide Product sub category'),
    status: yup.string().nullable(),
    brand: yup.string().nullable(),
    manufacturer: yup.string().nullable(),
    vendor: yup.string().nullable(),
    collections: yup.string().nullable(),
    tags: yup.array().nullable(),
    hasOptions: yup.bool().nullable(),
    options: yup.array().nullable(),
});

const _Product = () => {
    const [form] = Form.useForm();

    const onFormValueChange = (changesValues: any, values: any) => {
        if (changesValues.options) {
            const model = productStore.setVariants(values as ProductModel);
            form.setFieldsValue(model);
        }
    };

    return (
        <BaseForm
            form={form}
            store={productStore as any}
            validationSchema={schema}
            onFormValueChange={onFormValueChange}
        >
            <Row>
                {/* Left */}
                <Col span={16}>
                    <ProductGeneral />
                    <VerticalSpace size="lg" />
                    <ProductPricing />
                    <VerticalSpace size="lg" />
                    <ProductInventory />
                    <VerticalSpace size="lg" />
                    <ProductVariants />
                    <VerticalSpace size="lg" />
                    <ProductDetails />
                    {/* <VerticalSpace size="lg" />
                    <ProductVariants /> */}
                </Col>

                {/* Right */}
                <Col span={7} offset={1}>
                    <ProductMedia />
                    <VerticalSpace size="lg" />
                    <ProductStatusCard />
                    <VerticalSpace size="lg" />
                    <ProductOrganization />
                    <VerticalSpace size="lg" />
                    <ProductShipping />
                </Col>
            </Row>
        </BaseForm>
    );
};

const ProductGeneral = () => {
    return (
        <Card title="General">
            <Form.Item label="Title" name="name" rules={[yupSync(schema)]}>
                <Input />
            </Form.Item>
            <Form.Item label="Description" name="description" rules={[yupSync(schema)]}>
                <Input.TextArea />
            </Form.Item>
            <Form.Item label="Tags" name="tags" rules={[yupSync(schema)]}>
                <ProductTags />
            </Form.Item>
        </Card>
    );
};

const ProductDetails = () => {
    return (
        <Card title="Additional Details">
            <ProductDetailsSection />
            <VerticalSpace size="lg" />
            <ProductFeaturesSection />
        </Card>
    );
};

const ProductDetailsSection = () => {
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

const ProductFeaturesSection = () => {
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

const ProductMedia = observer(() => {
    return (
        <Card title="Media">
            {productStore.selectedItem.uploadStore ? (
                <Upload store={productStore.selectedItem.uploadStore} multiple />
            ) : (
                <Center>
                    <Spin spinning={true} size={'small'} />
                </Center>
            )}
        </Card>
    );
});

const ProductPricing = () => {
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
                <Checkbox>Charge tax on this Product</Checkbox>
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

const ProductInventory = () => {
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

const ProductShipping = () => {
    return (
        <Card title="Shipping">
            <Form.Item name="isPhysicalProduct" valuePropName="checked" rules={[yupSync(schema)]}>
                <Checkbox>This is a physical product</Checkbox>
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

const ProductOptionsSection = () => {
    const formItemStyle = {
        margin: 0,
    };
    return (
        <Form.List name="options">
            {(options, { add, remove }, { errors }) => (
                <Card
                    title={
                        <Row justify={'space-between'}>
                            <Typography.Text>Options</Typography.Text>
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
                    type="inner"
                >
                    <Table
                        showHeader={false}
                        columns={[
                            {
                                title: 'Option',
                                dataIndex: 'option',
                                render: (value, record, index) => {
                                    return (
                                        <Form.Item
                                            name={[index, 'name']}
                                            isListField
                                            {...value}
                                            validateTrigger={['onChange', 'onBlur']}
                                            style={formItemStyle}
                                        >
                                            <ProductOptions placeholder="Name" />
                                        </Form.Item>
                                    );
                                },
                            },
                            {
                                title: 'Values',
                                dataIndex: 'values',
                                render: (value, record, index) => {
                                    return (
                                        <Form.Item
                                            name={[index, 'values']}
                                            isListField
                                            {...value}
                                            validateTrigger={['onChange', 'onBlur']}
                                            style={formItemStyle}
                                        >
                                            <Select
                                                placeholder="Values"
                                                mode="tags"
                                                allowClear
                                                autoClearSearchValue
                                            ></Select>
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
                        dataSource={options}
                    ></Table>
                </Card>
            )}
        </Form.List>
    );
};

const ProductVariants = () => {
    return (
        <Card
            title="Variants"
            extra={
                <Typography.Text disabled>
                    Specify product option variant details, like price, quantity or sku
                </Typography.Text>
            }
        >
            <ProductOptionsSection />
            <VerticalSpace size="lg" />
            <ProductVariantSection />
        </Card>
    );
};

const ProductVariantSection = () => {
    const formItemStyle = {
        margin: 0,
    };
    return (
        <Form.List name="variants">
            {(variants, { add, remove }, { errors }) => variants.length ? (
                <Card
                    title={
                        <Row justify={'space-between'}>
                            <Typography.Text>Variants</Typography.Text>
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
                    type="inner"
                >
                    <Table
                        showHeader={false}
                        columns={[
                            {
                                title: 'Variant',
                                dataIndex: 'variant',
                                render: (value, record, index) => {
                                    return (
                                        <Form.Item
                                            name={[index, 'variant']}
                                            isListField
                                            {...value}
                                            validateTrigger={['onChange', 'onBlur']}
                                            style={formItemStyle}
                                        >
                                            <Input readOnly />
                                        </Form.Item>
                                    );
                                },
                            },
                            {
                                title: 'Price',
                                dataIndex: 'price',
                                render: (value, record, index) => {
                                    return (
                                        <Form.Item
                                            name={[index, 'price']}
                                            isListField
                                            {...value}
                                            validateTrigger={['onChange', 'onBlur']}
                                            style={formItemStyle}
                                        >
                                            <InputNumber
                                                placeholder="Price"
                                                style={{
                                                    width: '100%',
                                                }}
                                            />
                                        </Form.Item>
                                    );
                                },
                            },
                            {
                                title: 'Quantity',
                                dataIndex: 'quantity',
                                render: (value, record, index) => {
                                    return (
                                        <Form.Item
                                            name={[index, 'quantity']}
                                            isListField
                                            {...value}
                                            validateTrigger={['onChange', 'onBlur']}
                                            style={formItemStyle}
                                        >
                                            <InputNumber
                                                placeholder="Quantity"
                                                style={{
                                                    width: '100%',
                                                }}
                                            />
                                        </Form.Item>
                                    );
                                },
                            },
                            {
                                title: 'SKU',
                                dataIndex: 'sku',
                                render: (value, record, index) => {
                                    return (
                                        <Form.Item
                                            name={[index, 'sku']}
                                            isListField
                                            {...value}
                                            validateTrigger={['onChange', 'onBlur']}
                                            style={formItemStyle}
                                        >
                                            <Input placeholder="SKU" />
                                        </Form.Item>
                                    );
                                },
                            },
                        ]}
                        pagination={{
                            hideOnSinglePage: true,
                        }}
                        dataSource={variants}
                    ></Table>
                </Card>
            ) : <></>}
        </Form.List>
    );
};

const ProductStatusCard = () => {
    return (
        <Card title="Product Status">
            <Form.Item label="Status" name="status" rules={[yupSync(schema)]}>
                <ProductStatus />
            </Form.Item>
        </Card>
    );
};

const ProductOrganization = () => {
    return (
        <Card title="Product Organization">
            <Form.Item label="Category" name="category" rules={[yupSync(schema)]}>
                <ProductCategoryPicker />
            </Form.Item>
            <Form.Item label="Sub Category" name="subCategory" rules={[yupSync(schema)]}>
                <ProductTypePicker placeholder="e.g. T-Shirt" />
            </Form.Item>
            <Form.Item label="Brand" name="brand" rules={[yupSync(schema)]}>
                <Input />
            </Form.Item>
            <Form.Item label="Manufacturer" name="manufacturer" rules={[yupSync(schema)]}>
                <Input />
            </Form.Item>
            <Form.Item label="Vendor" name="vendor" rules={[yupSync(schema)]}>
                <Input />
            </Form.Item>
        </Card>
    );
};

export const Product = observer(_Product);
