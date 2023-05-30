import { Button, Col, Form, Input, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { BaseList } from '@components/base/components/BaseList';
import { ColumnGroupType, ColumnType } from 'antd/es/table';
import { patientStore } from './InitPatients';
import { CalculatorOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react';

const _Patients = () => {
    const navigator = useNavigate();

    const columns = [
        // {
        //     title: 'Patient ID',
        //     dataIndex: 'id',
        //     width: 10,
        //     render: (value: any, record: any, index: number) => {
        //         return (
        //             <Button
        //                 type="link"
        //                 onClick={() => {
        //                     navigator(
        //                         `/${patientStore.titles.listName.toLocaleLowerCase()}/${record.id}`,
        //                     );
        //                 }}
        //             >
        //                 {value}
        //             </Button>
        //         );
        //     },
        // },
        // {
        //     title: 'Birth Date',
        //     dataIndex: 'birthday',
        //     width: 10,
        // },

        // {
        //     title: 'Prefix',
        //     dataIndex: 'prefix',
        //     width: 10,
        // },
        {
            title: 'Name',
            dataIndex: 'name',
            width: 20,
            render: (value: any, record: any, index: number) => {
                return (
                    <Button
                        type="link"
                        onClick={() => {
                            // navigator(
                            //     `/${patientStore.titles.listName.toLocaleLowerCase()}/${record.id}`,
                            // );
                        }}
                    >
                        {record.firstName} {record.lastName}
                    </Button>
                );
            },
        },
        // {
        //     title: 'First Name',
        //     dataIndex: 'firstName',
        //     width: 10,
        // },

        // {
        //     title: 'Last Name',
        //     dataIndex: 'lastName',
        //     width: 10,
        // },
        // {
        //     title: 'Suffix',
        //     dataIndex: 'suffix',
        //     width: 10,
        // },
        // {
        //     title: 'Maiden',
        //     dataIndex: 'maiden',
        //     width: 10,
        // },
        // {
        //     title: 'Marital',
        //     dataIndex: 'marital',
        //     width: 10,
        // },
        // {
        //     title: 'Race',
        //     dataIndex: 'race',
        //     width: 10,
        // },
        // {
        //     title: 'Ethnicity',
        //     dataIndex: 'ethnicity',
        //     width: 10,
        // },
        {
            title: 'Gender',
            dataIndex: 'gender',
            width: 10,
        },

        // {
        //     title: 'Address',
        //     dataIndex: 'address',
        //     width: 10,
        // },

        {
            title: 'City',
            dataIndex: 'city',
            width: 10,
        },

        {
            title: 'State',
            dataIndex: 'state',
            width: 10,
        },

        {
            title: 'County',
            dataIndex: 'county',
            width: 10,
        },
        // {
        //     title: 'FIPS',
        //     dataIndex: 'fips',
        //     width: 10,
        // },
        {
            title: 'ZIP',
            dataIndex: 'zip',
            width: 10,
        },

        // {
        //     title: 'Healthcare expenses',
        //     dataIndex: 'healthExpenses',
        //     width: 10,
        // },
        // {
        //     title: 'Healthcare coverage',
        //     dataIndex: 'healthcareCoverage',
        //     width: 10,
        // },
        // {
        //     title: 'Income',
        //     dataIndex: 'income',
        //     width: 10,
        // },
        // {
        //     title: 'Allergies Code',
        //     dataIndex: 'allergiesCode',
        //     width: 10,
        // },
        // {
        //     title: 'Allergies Desc',
        //     dataIndex: 'allergiesDesc',
        //     width: 10,
        // },
        // {
        //     title: 'Allergies Reaction',
        //     dataIndex: 'allergiesReaction',
        //     width: 10,
        // },
        // {
        //     title: 'Inactive Conditions Code',
        //     dataIndex: 'iCondCode',
        //     width: 10,
        // },
        // {
        //     title: 'Active Conditions Code',
        //     dataIndex: 'aCondCode',
        //     width: 10,
        // },
        // {
        //     title: 'Inactive Conditions Desc',
        //     dataIndex: 'iCondDesc',
        //     width: 10,
        // },
        // {
        //     title: 'Active Conditions Desc',
        //     dataIndex: 'aCondDesc',
        //     width: 10,
        // },
        // {
        //     title: 'Inactive Medications Code',
        //     dataIndex: 'iMedCode',
        //     width: 10,
        // },
        // {
        //     title: 'Active Medications Code',
        //     dataIndex: 'aMedCode',
        //     width: 10,
        // },
        // {
        //     title: 'Inactive Medications Desc',
        //     dataIndex: 'iMedDesc',
        //     width: 10,
        // },
        // {
        //     title: 'Active Medications Desc',
        //     dataIndex: 'aMedDesc',
        //     width: 10,
        // },
        // {
        //     title: 'Inactive Medications Reason Desc',
        //     dataIndex: 'iMedReasonDesc',
        //     width: 10,
        // },
        // {
        //     title: 'Active Medications Reason Desc',
        //     dataIndex: 'aMedReasonDesc',
        //     width: 10,
        // },

        // {
        //     title: 'Total Cost',
        //     dataIndex: 'totalCost',
        //     width: 10,
        // },
        // {
        //     title: 'Procedure Code',
        //     dataIndex: 'procedureCode',
        //     width: 10,
        // },
        // {
        //     title: 'Procedure Desc',
        //     dataIndex: 'procedureDesc',
        //     width: '2%',
        // },
        // {
        //     title: 'Procedure Reason Desc',
        //     dataIndex: 'procedureReasonDesc',
        //     width: 10,
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
            store={patientStore as any}
            headerRightContent={
                patientStore.selectedItems.length > 0 ? (
                    <Button type="primary" icon={<CalculatorOutlined />} onClick={() => {
                        navigator('/risk')
                    }}>
                        Calculate Risk Using ACG
                    </Button>
                ) : (
                    <></>
                )
            }
        />
    );
};

export const Patients = observer(_Patients);
