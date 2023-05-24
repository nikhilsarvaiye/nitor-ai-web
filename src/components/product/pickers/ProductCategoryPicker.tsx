import { ProductHierarchyPicker } from './ProductHierarchyPicker';

export const ProductCategoryPicker = ({
    name,
    value,
    onChange,
    onBlur,
    style,
    placeholder,
}: any) => {
    return (
        <ProductHierarchyPicker
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            propertyName={'category'}
            style={style}
            placeholder={placeholder}
        />
    );
};
