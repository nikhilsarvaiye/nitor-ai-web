import { BaseService } from '@components/base/services/base.service';
import { IService } from '@components/base/services/iservice';
import { ClaimModel } from './claim.models';
import { IPageResponse } from '@components/base/models';
import { QueryOptions } from 'odata-query';

const data = [
    {
        patientId: '81a701f2-ce1b-1119-171c-d939509ba8e5',
        type: 'PAYMENT',
        amount: '86.82',
        method: 'ECHECK',
        fromDate: '2011-03-29',
        toDate: '2011-06 - 28',
        placeOfService: 'c05d73d0- b348 - 32ce - 9fe5 - 13a720950f37',
        procedureCode: '308136',
        modifier1: '',
        modifier2: '',
        diagRef1: '1',
        diagRef2: '1',
        diagRef3: '1',
        diagRef4: '1',
        units: '1',
        departmentId: '5',
        notes: 'insulin isophane  human 70 UNT/ML / insulin  regular  human 30 UNT/ML Injectable Suspension [Humulin], Hydrochlorothiazide 25 MG Oral Tablet, Nitroglycerin 0.4 MG/ACTUAT Mucosal Spray, lisinopril 10 MG Oral Tablet, amLODIPine 2.5 MG Oral Tablet, 24 HR tacrolimus 1 MG Extended Release Oral Tablet, ferrous sulfate 325 MG Oral Tablet, 2.5 MG Oral Tablet	0	',
        unitAmount: '0',
        transferOutId: '2567362',
        transferType: '2',
        payments: '0',
        adjustments: '0',
        transfers: '5.98',
        patientInsuranceId: '',
        providerId:
            '81a701f2 - ce1b - 1119 - 171c - d939509ba8e5	d3d9e4ab - b925 - 3cd7 - 81fb - 975367b1e72e',
    },
    {
        patientId: '0a2015ef-73f4-f8b0-1c7b-e65004d41e4a',
        type: 'CHARGE',
        amount: '21.14',
        method: 'COPAY',
        fromDate: '2021 - 04 - 26',
        toDate: '2021-04 - 26',
        placeOfService: 'c709c5eb- ddd7 - 3778 - 84f7 - 0931a4d1c718',
        procedureCode: '1803932',
        modifier1: '',
        modifier2: '',
        diagRef1: '1',
        diagRef2: '',
        diagRef3: '',
        diagRef4: '',
        units: '1',
        departmentId: '1',
        notes: 'Leucovorin 100 MG Injection',
        unitAmount: '21.14',
        transferOutId: '2567362',
        tansferType: '1',
        payment: '0',
        adjustments: '0',
        transfers: '',
        patientInsuranceId: '0a2015ef - 73f4 - f8b0 - 1c7b - e65004d41e4a',
        providerId: '2da4cafa - 33b1 - 391e-8e68 - bcb61a09f571',
    },
    {
        patientId: '8f1f14d4-3df2-110a-d30e-92bf2a22c6b2',
        type: 'PAYMENt',
        amount: '30.71',
        method: 'ECHECK',
        fromDate: '2021 - 04 - 21',
        toDate: '2021-04 - 21',
        placeOfService: 'c709c5eb- ddd7 - 3778 - 84f7 - 0931a4d1c718',
        procedureCode: '1803932',
        modifier1: '',
        modifier2: '',
        diagRef1: '1',
        diagRef2: '1',
        diagRef3: '1',
        diagRef4: '1',
        units: '1',
        departmentId: '1',
        notes: 'insulin isophane  human 70 UNT/ML / insulin  regular  human 30 UNT/ML Injectable Suspension [Humulin], Hydrochlorothiazide 25 MG Oral Tablet',
        unitAmount: '3.5',
        transferOutId: '2567362',
        tansferType: '1',
        payment: '0',
        adjustments: '0',
        transfers: '',
        patientInsuranceId: '0a2015ef - 73f4 - f8b0 - 1c7b - e65004d41e4a',
        providerId: '2da4cafa - 33b1 - 391e-8e68 - bcb61a09f571',
    },
];

export class ClaimService extends BaseService<ClaimModel> implements IService<ClaimModel> {
    constructor() {
        super('Claim', 'Claim');
    }

    paginate = async (
        queryOptions?: Partial<QueryOptions<ClaimModel>>,
    ): Promise<IPageResponse<ClaimModel>> => {
        const pageData = {
            count: data.length,
            items: data as any,
        };

        return new Promise((res) => setTimeout(() => res(pageData), 500));
    };
}
