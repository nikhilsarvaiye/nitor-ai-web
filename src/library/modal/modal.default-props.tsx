import { CheckOutlined } from '@ant-design/icons';

export const modalDefaultPros = ({ ...props }) => {
    props.okButtonProps = props.okButtonProps || {};
    props.okButtonProps.icon = <CheckOutlined />;

    props.centered = true;

    return props;
};
