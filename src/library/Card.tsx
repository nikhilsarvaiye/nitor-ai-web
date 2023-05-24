import { Card as AntdCard, CardProps as AntdCardProps } from 'antd';
import { Styles } from './styles';

export interface CardProps extends AntdCardProps {
    highlightShadow?: boolean;
}

export const Card = (props: CardProps) => {
    return (
        <AntdCard
            {...props}
            style={{
                borderRadius: 5,
                ...props.style,
                ...(props.highlightShadow
                    ? Styles.highlightBorderBoxShadow
                    : Styles.basicBorderBoxShadow),
                // borderLeft: '1px solid #1890ff',
            }}
            headStyle={{
                // color: '#1890ff'
            }}
        />
    );
};
