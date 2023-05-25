import { CarePlanAdheranceAssignments } from '@components/charts/CarePlanAdheranceAssignments';
import { CarePlanPerformance } from '@components/charts/CarePlanPerformance';
import { Card } from '@library/Card';
import { SimpleCard } from '@library/card/SimpleCard';
import { useUserContext } from '@components/user/user.context';
import { CompareCard } from '@library/card/CompareCard';
import { VerticalSpace } from '@library/VerticalSpace';
import { AppLayout } from '../../AppLayout';
import { Col, Row } from 'antd';
import {
    AppleOutlined,
    AreaChartOutlined,
    ShoppingCartOutlined,
    UpCircleOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { faSortAmountUp, faCoins } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MetricCard } from '@library/card/MetricCard';
import { AppColor } from '../../AppTheme';

export const Summary = () => {
    const user = useUserContext();
    return (
        <AppLayout>
            <Row>
                <Col span={7}>
                    <MetricCard
                        icon={
                            <AreaChartOutlined
                                style={{
                                    fontSize: 28,
                                }}
                            />
                        }
                        title="Active Patients on Care Plan"
                        value="135"
                        theme={AppColor.LinearBlue}
                        numberValue
                    />
                </Col>
                <Col span={7} offset={1}>
                    <MetricCard
                        icon={<FontAwesomeIcon icon={faSortAmountUp} size={'xl'}></FontAwesomeIcon>}
                        title="Total Care Plan Assignments"
                        value="205"
                        theme={AppColor.LinearGreen}
                        numberValue
                    />
                </Col>
                <Col span={8} offset={1}>
                    <MetricCard
                        icon={<FontAwesomeIcon icon={faCoins} size={'xl'}></FontAwesomeIcon>}
                        title="High Risk Patients"
                        value="35%"
                        theme={AppColor.LinearRed}
                        numberValue
                    />
                </Col>
            </Row>
            <VerticalSpace size="xlg" />
            {/* <Row>
                <Col span={5}>
                    <SimpleCard
                        icon={<ShoppingCartOutlined />}
                        value="486"
                        description="Requests"
                        change={10}
                    />
                </Col>
                <Col span={5} offset={1}>
                    <SimpleCard
                        icon={<AppleOutlined />}
                        value="85%"
                        change={33}
                        description="Downloads"
                    />
                </Col>
                <Col span={5} offset={1}>
                    <SimpleCard
                        icon={<UserOutlined />}
                        value="0.5 Hours"
                        description="Avg User Time"
                        change={-5}
                    />
                </Col>
                <Col span={6} offset={1}>
                    <SimpleCard
                        icon={<UpCircleOutlined />}
                        value="486"
                        description="Conversion Rate"
                    />
                </Col>
            </Row>
            <VerticalSpace size="xlg" /> */}
            {/* <CompareCard
                title="Claim Filing"
                percentage={15}
                compareFromTitle="This Week"
                compareFromValue="1,502"
                compareToTitle="Previous Week"
                compareToValue="1,942"
            />
            <VerticalSpace size="xlg" /> */}
            <Card title="Care Plan Adherance compared to Assignments " highlightShadow>
                <CarePlanAdheranceAssignments />
            </Card>
            <VerticalSpace size="xlg" />
            <Card title="Care Plan health improvements by age" highlightShadow>
                <CarePlanPerformance />
            </Card>
        </AppLayout>
    );
};
