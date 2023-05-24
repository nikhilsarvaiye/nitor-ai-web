import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faSortAmountUp, faTag } from '@fortawesome/free-solid-svg-icons';
import { SalesTimeSeriesChart } from '@components/charts/SalesTimeSeriesChart';
import { QuantityTimeSeriesChart } from '@components/charts/QuantityTimeSeriesChart';
import { MetricCard } from '@library/card/MetricCard';
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
                        title="Total Sales"
                        value="₹ 4,64,100"
                        theme={AppColor.LinearBlue}
                        numberValue
                    />
                </Col>
                <Col span={7} offset={1}>
                    <MetricCard
                        icon={<FontAwesomeIcon icon={faSortAmountUp} size={'xl'}></FontAwesomeIcon>}
                        title="Total Quantity"
                        value="5003"
                        theme={AppColor.LinearGreen}
                        numberValue
                    />
                </Col>
                <Col span={8} offset={1}>
                    <MetricCard
                        icon={<FontAwesomeIcon icon={faCoins} size={'xl'}></FontAwesomeIcon>}
                        title="Total Margin"
                        value="₹ 1,50,042"
                        theme={AppColor.LinearRed}
                        numberValue
                    />
                </Col>
                {/* <Col span={6} offset={1}>
                    <MetricCard
                        icon={<FontAwesomeIcon icon={faTag} size={'xl'}></FontAwesomeIcon>}
                        title="Highest Seller Brand"
                        theme={AppColor.LinearYellow}
                        value="MI TV 32'"
                    />
                </Col> */}
            </Row>
            <VerticalSpace size="xlg" />
            <Row>
                <Col span={5}>
                    <SimpleCard
                        icon={<ShoppingCartOutlined />}
                        value="486"
                        description="Order Received"
                        change={10}
                    />
                </Col>
                <Col span={5} offset={1}>
                    <SimpleCard
                        icon={<AppleOutlined />}
                        value="85%"
                        change={33}
                        description="App Downloads"
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
                        description="Order Conversion Rate"
                    />
                </Col>
            </Row>
            <VerticalSpace size="xlg" />
            <CompareCard
                title="Week Sales"
                percentage={35}
                compareFromTitle="This Week"
                compareFromValue="₹ 1,50,042"
                compareToTitle="Previous Week"
                compareToValue="₹ 2,50,042"
            />
            <VerticalSpace size="xlg" />
            <Card title="Weekly Sales" highlightShadow>
                <SalesTimeSeriesChart />
            </Card>
            <VerticalSpace size="xlg" />
            <Row>
                <Col span={12}>
                    <Card title="Weekly Sales" highlightShadow>
                        <SalesTimeSeriesChart />
                    </Card>
                </Col>
                <Col span={11} offset={1}>
                    <Card title="Weekly Quantity Sold" highlightShadow>
                        <QuantityTimeSeriesChart />
                    </Card>
                </Col>
            </Row>
        </AppLayout>
    );
};
