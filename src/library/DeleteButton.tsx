import { DeleteFilled } from '@ant-design/icons';
import { Tooltip } from 'antd';

export const DeleteButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <Tooltip title="Delete">
            <DeleteFilled onClick={onClick} />
        </Tooltip>
    );
};
