import { Col } from 'antd';

export const VerticalSpace = ({ size }: { size?: 'sm' | 'md' | 'lg' | 'xlg' }) => {
    return (
        <Col
            style={{
                height: size === 'sm' ? 10 : size === 'xlg' ? 40 : size === 'lg' ? 30 : 20,
            }}
        ></Col>
    );
};
