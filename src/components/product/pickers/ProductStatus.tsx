import { Select } from 'antd';

export const ProductStatus = (props: any) => {
    return (
        <Select {...props}    >
            {['Active', 'Draft', 'Published'].map((x) => {
                return (
                    <Select.Option value={x} title={x} key={x}>
                        {x}
                    </Select.Option>
                );
            })}
        </Select>
    );
};
