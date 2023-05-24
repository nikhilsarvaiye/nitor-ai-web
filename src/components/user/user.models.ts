import { BaseModel } from '@components/base/models';
import { AppFile } from '@library/util/file';
import { makeAutoObservable } from 'mobx';

export class UserModel extends BaseModel {
    userId: string = '';
    firstName: string = '';
    lastName: string = '';
    email: string = '';
    name?: string = '';
    picture?: AppFile = undefined;

    address?: string = '';
    area?: string = '';
    landmark?: string = '';
    city?: string = '';
    state?: string = '';
    country?: string = '';
    zipcode?: string = '';
    
    theme?: string = '';
    mobile?: string = '';
    alertnateMobile?: string = '';
    customPictureUrl: string | undefined | null = '';

    get pictureUrl() {
        return this.customPictureUrl
            ? this.customPictureUrl
            : this.uploadFiles?.length
            ? this.uploadFiles[0].file.preview
            : null;
    }

    /**
     *
     */
    constructor() {
        super();
        makeAutoObservable({});
    }
}

export class LoggedInUser {
    user: UserModel;
    accessToken: string;
    configuration?: any;

    constructor(user: UserModel, accessToken: string, configuration?: any) {
        this.user = user;
        this.accessToken = accessToken;
        this.configuration = configuration;
    }
}
