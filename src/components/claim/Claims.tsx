import { Button, Col, Form, Input, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { BaseList } from '@components/base/components/BaseList';
import { ColumnGroupType, ColumnType } from 'antd/es/table';
import { claimStore } from './InitClaim';

export const Claims = () => {
    const navigator = useNavigate();

    const columns = [
        // {
        //     title: 'Patient ID',
        //     dataIndex: 'patientId',
        //     width: 20,
        // },
        {
            title: 'Type',
            dataIndex: 'type',
            width: 20,
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            width: 20,
        },
        {
            title: 'Method',
            dataIndex: 'method',
            width: 20,
        },
        {
            title: 'From Date',
            dataIndex: 'fromDate',
            width: 20,
        },
        {
            title: 'To Date',
            dataIndex: 'toDate',
            width: 20,
        },
        // {
        //     title: 'Place of Service',
        //     dataIndex: 'placeOfService',
        //     width: 20,
        // },
        // {
        //     title: 'Procedure Code',
        //     dataIndex: 'procedureCode',
        //     width: 20,
        // },
        // {
        //     title: 'Modifier 1',
        //     dataIndex: 'modifier1',
        //     width: 20,
        // },
        // {
        //     title: 'Modifier 2',
        //     dataIndex: 'modifier 2',
        //     width: 20,
        // },
        // {
        //     title: 'Diagnosis Ref 1',
        //     dataIndex: 'diagRef1',
        //     width: 20,
        // },
        // {
        //     title: 'Diagnosis Ref 2',
        //     dataIndex: 'diagRef2',
        //     width: 20,
        // },
        // {
        //     title: 'Diagnosis Ref 3',
        //     dataIndex: 'diagRef3',
        //     width: 20,
        // },
        // {
        //     title: 'Diagnosis Ref 4',
        //     dataIndex: 'diagRef4',
        //     width: 20,
        // },
        // {
        //     title: 'Units',
        //     dataIndex: 'units',
        //     width: 20,
        // },
        // {
        //     title: 'Department ID',
        //     dataIndex: 'departmentId',
        //     width: 20,
        // },
        // {
        //     title: 'Notes',
        //     dataIndex: 'notes',
        //     width: 20,
        // },
        // {
        //     title: 'Unit Amount',
        //     dataIndex: 'unitAmount',
        //     width: 20,
        // },
        // {
        //     title: 'Transfer Out ID',
        //     dataIndex: 'transferOutId',
        //     width: 20,
        // },
        // {
        //     title: 'Transfer Type',
        //     dataIndex: 'transferType',
        //     width: 20,
        // },
    
        // {
        //     title: 'Payments',
        //     dataIndex: 'payments',
        //     width: 20,
        // },
    
        // {
        //     title: 'Adjustments',
        //     dataIndex: 'adjustments',
        //     width: 20,
        // },
    
        // {
        //     title: 'Transfers',
        //     dataIndex: 'transfers',
        //     width: 20,
        // },
        // {
        //     title: 'Insurance Id',
        //     dataIndex: 'patientInsuranceId',
        //     width: 20,
        // },
        // {
        //     title: 'Provider ID',
        //     dataIndex: 'providerId',
        //     width: 20,
        // },
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
            store={claimStore as any}
        />
    );
};
