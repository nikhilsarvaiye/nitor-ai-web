import { UserContext } from '@components/user/user.init';
import axios, { AxiosHeaders } from 'axios';
import { requestHandler, successHandler, errorHandler } from './base.api.interceptor';

const api = axios.create({
    baseURL: 'https://nitor-health-ai-api.azurewebsites.net' // process.env.API_URL,
});

api.interceptors.request.use((request) => requestHandler(request));

api.interceptors.request.use((config) => {
    //config.headers[''] = '';
    if (UserContext.LoggedInUser) {
        config.headers = config.headers || new AxiosHeaders();
        if (config.headers != null) {
            (config.headers as AxiosHeaders).set(
                'Authorization',
                `Bearer ${UserContext.LoggedInUser.accessToken}`,
            );
        }
    }
    return config;
});

api.interceptors.response.use(
    (response) => successHandler(response),
    (error) => errorHandler(error),
);

export { api as Api };
