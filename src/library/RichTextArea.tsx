import { FC, useEffect, useState } from 'react';
import ReactQuill from 'react-quill';

export const RichTextArea: FC<{
    value?: string;
    onChange?(value: string, delta: any, source: any, editor: any): void;
}> = (props) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        setValue(props.value || '');
    }, [props.value]);

    const onChange = (value: string, delta: any, source: any, editor: any) => {
        setValue(value);
        if (props.onChange) {
            props.onChange(value, delta, source, editor);
        }
    };

    return (
        <ReactQuill
            theme="snow"
            value={value}
            onChange={onChange}
            formats={[
                'header',
                'bold',
                'italic',
                'underline',
                'strike',
                'blockquote',
                'list',
                'bullet',
                'indent',
                'link',
                'image',
            ]}
            modules={{
                toolbar: [
                    [{ header: [1, 2, false] }],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
                    ['link', 'image'],
                    ['clean'],
                ],
            }}
            style={{
                height: 150,
                marginBottom: 40,
            }}
        />
    );
};
