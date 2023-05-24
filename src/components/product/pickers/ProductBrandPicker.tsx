import { ProductHierarchyPicker } from './ProductHierarchyPicker';

export const ProductBrandPicker = ({
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
            propertyName={'brand'}
        />
    );
};
