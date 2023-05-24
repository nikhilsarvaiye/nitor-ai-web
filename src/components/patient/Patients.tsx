import { Button, Col, Form, Input, Row, Tag } from 'antd';
import { useNavigate } from 'react-router-dom';
import { BaseList } from '@components/base/components/BaseList';
import { ColumnGroupType, ColumnType } from 'antd/es/table';
import { patientStore } from './InitPatients';

export const Patients = () => {
    const navigator = useNavigate();
    const columns = [
        {
            dataIndex: 'name',
            title: 'Patient Name',
            render: (value: any, record: any, index: number) => {
                return (
                    <Button
                        type="link"
                        onClick={() => {
                            navigator(
                                `/${patientStore.titles.listName.toLocaleLowerCase()}/${record.id}`,
                            );
                        }}
                    >
                        {value}
                    </Button>
                );
            },
        },
        {
            dataIndex: 'category',
            title: 'Category',
            sorter: true,
        },
        {
            dataIndex: 'quantity',
            title: 'Stock',
        },
        {
            dataIndex: 'price',
            title: 'Price',
        },
        {
            dataIndex: 'status',
            title: 'Status',
            render: (value: any, record: any, index: number) => {
                return <Tag color="green">{value}</Tag>;
            },
        },
    ] as (ColumnGroupType<any> | ColumnType<any>)[];
    return (
        <BaseList
            searchFormFields={
                <Row>
                    <Col span={6}>
                        <Form.Item name={'name'}>
                            <Input placeholder="Search by name" />
                        </Form.Item>
                    </Col>
                </Row>
            }
            columns={columns}
            store={patientStore as any}
        />
    );
};
