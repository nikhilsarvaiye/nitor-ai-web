import { useState, useEffect } from 'react';
import { Select, Spin } from 'antd';
import { useDebounce } from '@util/debounce';
import { PatientModel } from './patient.models';
import { patientService } from './InitPatients';

export interface UserPickerProps {
    onChange?: (patientId: string, user?: PatientModel) => void;
    value?: string;
    variant?: boolean;
    placeholder?: string;
}

export const PatientPicker = (props: UserPickerProps) => {
    const [patients, setPatients] = useState<PatientModel[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getPatients = async (key?: string) => {
        try {
            setLoading(true);
            const queryOptions = {
                filter: {
                    or: [
                        key
                            ? {
                                  name: {
                                      startswith: key,
                                  },
                              }
                            : {},
                        key
                            ? {
                                  name: {
                                      contains: key,
                                  },
                              }
                            : {},
                        props.value
                            ? {
                                  id: {
                                      eq: props.value.split('_')[0],
                                  },
                              }
                            : {},
                    ],
                },
                select: ['id', 'name', 'variants', 'price'],
                top: 20,
            } as any;
            const patients = await patientService.list(queryOptions);
            if (props.variant) {
                const patientVariants = patients.flatMap((x) => {
                    return (x.variants || []).map((v) => {
                        return {
                            ...x,
                            ...v,
                            variantId: `${x.id}_${v.option}_${v.variant}`,
                        };
                    });
                });
                setPatients(patientVariants);
            } else {
                setPatients(patients);
            }
        } finally {
            setLoading(false);
        }
    };

    // useEffect(() => {
    //     getPatients();
    // }, []);

    useEffect(() => {
        // if (props.value && !patients.find((x) => x.id === props.value)) {
        //     getPatients(props.value);
        // } else if (!props.value) {
        //     getPatients();
        // }
        getPatients();
    }, [props.value]);

    const { Option } = Select;

    return (
        <Select
            {...props}
            onChange={(id: string) => {
                const item = patients.find(
                    (x) => (props.variant ? (x as any).variantId : x.id) === id,
                );
                if (props.onChange) {
                    props.onChange(id, item);
                }
            }}
            showSearch
            allowClear
            autoClearSearchValue
            loading={loading}
            onSearch={useDebounce((value: string) => {
                getPatients(value);
            })}
            filterOption={(input, option) => {
                return option?.title.toLowerCase().indexOf(input.toLowerCase()) >= 0;
            }}
            notFoundContent={loading ? <Spin spinning={loading}></Spin> : null}
            style={{ width: '100%' }}
        >
            {patients.map((x) => {
                return (
                    <Option
                        value={props.variant ? (x as any).variantId : x.id}
                        title={x.name}
                        key={props.variant ? (x as any).variantId : x.id}
                    >
                        {props.variant ? `${x.name}-${(x as any).variant}` : x.name}
                    </Option>
                );
            })}
        </Select>
    );
};
