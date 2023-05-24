import { useEffect, useState } from 'react';
import { distinct } from '@util/js-helper';
import { useDebounce } from '@util/debounce';
import { productService } from '@components/product/InitProducts';
import { Select } from 'antd';

export const ProductTags = (props: any) => {
    const propertyName = 'tags';
    const [items, setItems] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const get = async (key?: string) => {
        try {
            setLoading(true);
            const queryOptions = {
                filter: key
                    ? {
                          or: [
                              {
                                  [propertyName]: {
                                      startswith: key,
                                  },
                              },
                              {
                                  [propertyName]: {
                                      contains: key,
                                  },
                              },
                          ],
                      }
                    : {},
                select: [propertyName],
                top: 20,
            } as any;
            const products = await productService.list(queryOptions);
            let items = products
                .map((x: any) => [...(x[propertyName] || [])])
                .filter((x: any[]) => x.length)
                .filter(distinct)
                .filter((x: any[]) => x);
            setItems(items);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        get();
    }, []);

    const { Option } = Select;

    return (
        <Select
            {...props}
            showSearch
            allowClear
            autoClearSearchValue
            mode={'tags'}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            onSearch={useDebounce((value: string) => {
                get(value);
            })}
            
            // filterOption={(input, option) => {
            //     return option?.title.toLowerCase().indexOf(input.toLowerCase()) >= 0;
            // }}
        >
            {items.map((x) => {
                return (
                    <Option value={x} title={x} key={x}>
                        {x}
                    </Option>
                );
            })}
        </Select>
    );
};
