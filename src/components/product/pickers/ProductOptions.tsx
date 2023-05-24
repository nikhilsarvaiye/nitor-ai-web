import { ProductHierarchyPicker } from './ProductHierarchyPicker';

export const ProductOptions = ({ name, value, onChange, onBlur, placeholder }: any) => {
    return (
        <ProductHierarchyPicker
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            propertyName={'options.name'}
            placeholder={placeholder}
            defaultValues={['Size', 'Color', 'Material', 'Style']}
        />
    );
};
