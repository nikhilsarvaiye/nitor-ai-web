const basicBorderShadow = {
    border: '1px solid #e8e9f1',
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    // boxShadow: 'rgb(0 0 0 / 8%) 0px 1px 2px',
};

export const Styles = {
    basicBorderBoxShadow: basicBorderShadow,
    highlightBorderBoxShadow: {
        ...basicBorderShadow,
        boxShadow: 'rgb(0 0 0 / 8%) 0px 1px 4px',
    },
    inputAsPlainText: {
        border: 'none',
    },
    borderColor: '#f0f0f0',
    border: '1px solid #f0f0f0',
    highlightBorder: '1px solid #e8e9f1',
};
