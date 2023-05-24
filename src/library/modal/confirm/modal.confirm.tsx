import { Modal } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { modalDefaultPros } from '../modal.default-props';

export const confirm = ({ ...props }) => {
    props = modalDefaultPros(props);

    return Modal.confirm({
        okText: 'Yes',
        cancelText: 'No',
        cancelButtonProps: {
            icon: <CloseOutlined />,
        },
        ...props,
    });
};
