import { FC } from 'react';
import classNames from 'classnames';
import { CardProps, Col, Progress, Row, theme, Typography } from 'antd';
import { Card } from '@library/Card';
import { VerticalSpace } from '@library/VerticalSpace';
import { AppColor } from './../../AppTheme';

export interface CompareCardProps extends CardProps {
    title: string;
    percentage: number;
    compareFromTitle: string;
    compareFromValue: string;
    compareFromIcon?: string;
    compareToTitle: string;
    compareToValue: string;
    compareToIcon?: string;
}

export const CompareCard: FC<CompareCardProps> = (props) => {
    const { token } = theme.useToken();
    return (
        <Card {...props} highlightShadow>
            <Row justify={'space-between'}>
                <Col>
                    <Typography.Text style={{ fontSize: 18 }}>
                        <strong>{props.compareFromValue}</strong>
                    </Typography.Text>
                </Col>
                <Col>
                    <Typography.Text style={{ fontSize: 18 }}>
                        <strong>{props.compareToValue}</strong>
                    </Typography.Text>
                </Col>
            </Row>
            <VerticalSpace size="sm" />
            <div className="progress">
                <Progress percent={props.percentage} size="small" strokeColor={AppColor.LinearBlue} />
            </div>
            <Row justify={'space-between'}>
                <Col>
                    <Typography.Text>{props.compareFromTitle}</Typography.Text>
                </Col>
                <Col>
                    <Typography.Text>{props.compareToTitle}</Typography.Text>
                </Col>
            </Row>
        </Card>
    );
};

export const CompareCardOld: FC<CompareCardProps> = (props) => {
    return (
        <Card
            className={classNames('compare-card', props.className)}
            style={props.style}
            {...props}
        >
            <div className="title">
                <div className="from">{props.compareFromValue}</div>
                <div className="to">{props.compareToValue}</div>
            </div>
            <div className="progress">
                <Progress percent={props.percentage} size="small" />
            </div>
            <div className="description">
                <div className="from">{props.compareFromTitle}</div>
                <div className="to">{props.compareToTitle}</div>
            </div>
        </Card>
    );
};
