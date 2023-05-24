import { Styles } from '@library/styles';
import { ThemeConfig } from 'antd/es/config-provider/context';

let colorPrimary = 'rgb(24, 144, 255)';
let colorPrimaryHover = 'rgb(24, 144, 255)';

const colorPrimaryActive = 'rgb(24, 144, 255)';
const colorPrimaryTextActive = '#000';

// colorPrimary = '#262626';
// colorPrimaryHover = colorPrimary;


export enum AppColor {
    Yellow = '#f5bd42',
    Blue = '#267dff',
    Red = '#ad1e28',
    Orange = 'rgb(234, 67, 54)',
    Green = 'rgb(51 126 119)', // '#5ca177',
    Purple = '#76618b',
    Pink = '#ea59ac',
    Violet = '#5340ff',
    LightBlue = '#7fdbff',
    LightGreen = '#afcc46',
    LightRed = '#e8574b',
    LinearBlue = 'linear-gradient(195deg, rgb(13 86 146), rgb(38, 125, 255))',
    LinearGreen = 'linear-gradient(195deg, rgb(13 83 89), rgb(51, 126, 119))',
    LinearYellow = 'linear-gradient(195deg, rgb(221 159 22), rgb(245, 189, 66))',
    LinearRed = 'linear-gradient(195deg, rgb(180 28 26), rgb(234, 67, 54))',
}

export const DefaultAppTheme: ThemeConfig = {
    token: {
        wireframe: true,
        borderRadius: 5,
        colorBgLayout: '#fafafa', // '#f9f9f9', // '#F7F9FC',
        colorBgContainer: '#fff',
        colorPrimary: colorPrimary,
        colorPrimaryActive: colorPrimaryActive,
        colorPrimaryTextActive: colorPrimaryTextActive,
        colorPrimaryHover: colorPrimaryHover,
    },
    components: {
        // Input: {
        //     controlHeight: 36,
        // },
        // Select: {
        //     controlHeight: 36,
        // },
        // InputNumber: {
        //     controlHeight: 36,
        // },
        Button: {
            borderRadius: 5,
            // controlHeight: 34,
            colorLink: colorPrimary,
            colorLinkActive: colorPrimary,
            colorLinkHover: colorPrimary
        },
        Card: {
            colorBorder: Styles.borderColor,
            borderRadius: 50,
        },
        Menu: {},
        Typography: {
            colorTextDisabled: 'gray',
        },
    },
};
