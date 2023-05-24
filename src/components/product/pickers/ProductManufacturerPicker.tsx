import { ProductHierarchyPicker } from './ProductHierarchyPicker';

export const ProductManufacturerPicker = ({
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
            propertyName={'manufacturer'}
        />
    );
};
