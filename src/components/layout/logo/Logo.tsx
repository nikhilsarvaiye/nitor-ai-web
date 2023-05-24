import { FC } from 'react';
import { Row } from 'antd';
import { observer } from 'mobx-react-lite';

const _Logo: FC<{ collapsed: boolean }> = (props) => {
    return (
        <Row
            className="logo"
            style={{
                height: 70,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <img
                alt="Logo"
                style={{
                    marginTop: props.collapsed ? 0 : 10,
                    height: '100%',
                }}
                src={props.collapsed ? '/logo/logo-icon.png' : '/logo/logo.png'}
            />
            {/* <strong
        style={{
            fontSize: collapsed ? 12 : 24,
            // color: token.colorPrimary
        }}
    >
        hyper local
    </strong> */}
        </Row>
    );
};

export const Logo = observer(_Logo);
