import { Button, Col, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { BaseList } from '@components/base/components/BaseList';
import { ColumnGroupType, ColumnType } from 'antd/es/table';
import { ProjectOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react';
import { RiskPieChart } from '@components/charts/RiskPieChart';
import { riskPatientStore } from './InitRisk';
import { PatientRiskData } from './risk.patient.service';
import { useEffect, useState } from 'react';
import { IModel } from '@components/base/models';

const _RiskPatients = () => {
    const navigator = useNavigate();
    const [selectedRows, setSelectedRows] = useState<IModel[]>([]);

    const columns = [
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
                            //     `/${riskPatientStore.titles.listName.toLocaleLowerCase()}/${
                            //         record.id
                            //     }`,
                            // );
                        }}
                    >
                        {record.firstName} {record.lastName}
                    </Button>
                );
            },
        },
        {
            title: 'Risk',
            dataIndex: 'risk',
            width: 10,
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            width: 10,
        },
        {
            title: 'ZIP',
            dataIndex: 'zip',
            width: 10,
        },
    ] as (ColumnGroupType<any> | ColumnType<any>)[];

    useEffect(() => {
        message.destroy();
        message.info('we are calculating Risk Using ACG, kindly wait...');
    }, []);

    return (
        <Col>
            <BaseList
                topContent={
                    !riskPatientStore.loading ? (
                        <Col style={{ marginBottom: 10 }}>
                            <RiskPieChart />
                        </Col>
                    ) : (
                        <></>
                    )
                }
                headerTitle={'ACG Risk Patients'}
                hideNew
                hideDelete
                hideSearch
                columns={columns}
                store={riskPatientStore as any}
                rowSelectionType="radio"
                onSelectedRows={(selectedRowsKeys, selectedRows) => {
                    setSelectedRows(selectedRows);
                }}
                headerRightContent={
                    selectedRows.length === 1 && !riskPatientStore.loading ? (
                        <Button
                            type="primary"
                            icon={<ProjectOutlined />}
                            onClick={() => {
                                navigator('/plans/' + selectedRows[0].id);
                            }}
                        >
                            Generate Care Plan
                        </Button>
                    ) : (
                        <></>
                    )
                }
            />
        </Col>
    );
};

export const RiskPatients = observer(_RiskPatients);
