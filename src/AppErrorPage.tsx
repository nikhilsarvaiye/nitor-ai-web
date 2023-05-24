import { Card } from '@library/Card';
import { Center } from '@library/center';
import { useRouteError } from 'react-router-dom';

export const AppErrorPage = () => {
    const error = useRouteError() as any;
    console.error(error);

    return (
        <div id="error-page">
            <Center app>
                <Card title="Route Error">
                    <h1>Oops!</h1>
                    <p>Sorry, an unexpected error has occurred.</p>
                    <p>
                        <i>{error.statusText || error.message}</i>
                    </p>
                </Card>
            </Center>
        </div>
    );
};
