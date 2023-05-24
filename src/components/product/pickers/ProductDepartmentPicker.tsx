import { ProductHierarchyPicker } from './ProductHierarchyPicker';

export const ProductDepartmentPicker = ({
    name,
    value,
    onChange,
    onBlur,
}: any) => {
    return (
        <ProductHierarchyPicker
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            propertyName={'department'}
        />
    );
};
