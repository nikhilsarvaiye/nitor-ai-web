import { Button, Col, Form, Input, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { BaseList } from '@components/base/components/BaseList';
import { ColumnGroupType, ColumnType } from 'antd/es/table';
import { planStore } from './InitPlan';

export const Plans = () => {
    const navigator = useNavigate();

    const columns = [
        {
            title: 'Name',
            dataIndex: 'patientName',
            width: 10,
            render: (value: any, record: any, index: number) => {
                return (
                    <Button
                        type="link"
                        onClick={() => {
                            navigator(
                                `/${planStore.titles.listName.toLocaleLowerCase()}/${record.id}`,
                            );
                        }}
                    >
                        {value}
                    </Button>
                );
            },
        },
        {
            title: 'Created On',
            dataIndex: 'createdDate',
            width: 10,
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
            store={planStore as any}
        />
    );
};
