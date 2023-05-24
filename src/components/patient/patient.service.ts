import { BaseService } from '@components/base/services/base.service';
import { IService } from '@components/base/services/iservice';
import { PatientModel } from './patient.models';

export class PatientService extends BaseService<PatientModel> implements IService<PatientModel> {
    constructor() {
        super('Patient', 'patient');
    }
}
