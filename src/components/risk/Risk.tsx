import { Button, Col, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { BaseList } from '@components/base/components/BaseList';
import { ColumnGroupType, ColumnType } from 'antd/es/table';
import { ProjectOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react';
import { RiskPieChart } from '@components/charts/RiskPieChart';
import { riskPatientService, riskPatientStore } from './InitRisk';
import { PatientRiskData } from './risk.patient.service';

const _RiskPatients = () => {
    const navigator = useNavigate();

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
                            navigator(
                                `/${riskPatientStore.titles.listName.toLocaleLowerCase()}/${
                                    record.id
                                }`,
                            );
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
                headerRightContent={
                    riskPatientStore.selectedItems.length === 1 && !riskPatientStore.loading ? (
                        <Button
                            type="primary"
                            icon={<ProjectOutlined />}
                            onClick={() => {
                                message.info("we are generating patient care plan for patient, kindly wait...");
                                navigator('/plans/' + PatientRiskData[0].id);
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
