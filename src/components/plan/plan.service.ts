import { BaseService } from '@components/base/services/base.service';
import { IService } from '@components/base/services/iservice';
import { PlanModel } from './plan.models';
import { IPageResponse } from '@components/base/models';
import { QueryOptions } from 'odata-query';
import { AxiosRequestConfig } from 'axios';
import { Api } from '@components/base/api/base.api';
import { PatientRiskData } from '@components/risk/risk.patient.service';

const data = [
    {
        id: '11a701f2-ce1b-1119-171c-d939509ba8e5',
        patientName: 'Edwina Witting',
        createdDate: '25/5/2023',
    },
    {
        id: '21a701f2-ce1b-1119-171c-d939509ba8e5',
        patientName: 'Donny Welsch',
        createdDate: '20/5/2023',
    },
    {
        id: '31a701f2-ce1b-1119-171c-d939509ba8e5',
        patientName: 'Iola Muller',
        createdDate: '11/4/2023',
    },
];

export class PlanService extends BaseService<PlanModel> implements IService<PlanModel> {
    constructor() {
        super('Plan', 'Plan');
    }

    paginate = async (
        queryOptions?: Partial<QueryOptions<PlanModel>>,
    ): Promise<IPageResponse<PlanModel>> => {
        const pageData = {
            count: 3,
            items: data as any,
        };

        return new Promise((res) => setTimeout(() => res(pageData), 500));
    };

    get = async (id: string, config?: AxiosRequestConfig): Promise<PlanModel | null> => {
        const patient = PatientRiskData.find((x) => x.id === id);
        if (!patient) {
            return null;
        }
        // const url = process.env.AI_API_URL?.toString() || '';
        const url = 'https://nitor-health-ai-ml-api.purpletree-ab9eb4f0.southeastasia.azurecontainerapps.io';
        const response = await Api.post<PlanModel>(url, {
            PATIENTID: id,
            FIRST: patient.firstName,
            LAST: patient.lastName,
            GENDER: patient.gender,
            Age: patient.age,
            sum_risk: '9.42098',
            Risk_Bracket: patient.risk,
            ACTIVE_CONDITIONS_DESC: patient.aCondDesc,
            ACTIVE_MEDICATIONS_DESCRIPTION: patient.aMedDesc,
            ALLERGIES_DESC: patient.allergiesDesc,
            PROCEDURE_DESCRIPTION: patient.procedureDesc,
        });
        const data = response.data as any;
        if (!data) {
            return null;
        }
        return {
            diagnosis: data['Diagnosis'],
            evaluation: data['Goals & Outcomes'] || data['Goals and Outcomes'],
            intervention: data['Intervention'],
            longTermGoal:
                data['Long-term Evaluation'] ||
                data['Long Term Evaluation'] ||
                data['Long term Evaluation'] ||
                data['Long-Term Evaluation'],
            shortTermGoal:
                data['Short-term Evaluation'] ||
                data['Short Term Evaluation'] ||
                data['Short term Evaluation'] ||
                data['Short-Term Evaluation'],
            comments: '',
        } as any;
    };

    update = async (id: string, t: PlanModel): Promise<void> => {
        await new Promise((res) => setTimeout(() => res({}), 1000));
    };
}
