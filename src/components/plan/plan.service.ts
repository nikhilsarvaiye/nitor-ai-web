import { BaseService } from '@components/base/services/base.service';
import { IService } from '@components/base/services/iservice';
import { PlanModel } from './plan.models';
import { IPageResponse } from '@components/base/models';
import { QueryOptions } from 'odata-query';
import { AxiosRequestConfig } from 'axios';
import { Api } from '@components/base/api/base.api';

const data = [
    {
        id: '81a701f2-ce1b-1119-171c-d939509ba8e5',
        patientName: 'Edwina Witting',
        createdDate: '25/5/2023',
    },
    {
        id: '81a701f2-ce1b-1119-171c-d939509ba8e5',
        patientName: 'Donny Welsch',
        createdDate: '20/5/2023',
    },
    {
        id: '81a701f2-ce1b-1119-171c-d939509ba8e5',
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
        const response = await Api.get<PlanModel>(
            `https://nitor-ai-api.azurewebsites.net/generate_treatment_plan?id=${id}`,
            config,
        );
        return {
            diagnosis:
                'Edwina Witting has been diagnosed with miscarriage in the first trimester, disorder of kidney due to diabetes mellitus, severe anxiety, chronic kidney disease stages 1-4, metabolic syndrome X, proteinuria due to type 2 diabetes mellitus, history of appendectomy, end-stage renal disease, obesity, appendicitis, anemia, social isolation, prediabetes, essential hypertension, microalbuminuria due to type 2 diabetes mellitus, and limited social contact, and is awaiting kidney transplantation.',
            evaluation:
                "The goal of Edwina's treatment plan is to improve her physical health, minimize the risk of further health complications, and reduce her anxiety levels",
            intervention:
                'Edwina should receive regular medical check-ups, take her prescribed medications, and attend counseling sessions to help her manage her anxiety. She should also follow a healthy diet and exercise routine to improve her physical health and maintain a healthy weight.',
            longTermGoal:
                'Edwina should be evaluated regularly over a period of months to ensure that her treatment plan is effective and her health is improving.',
            shortTermGoal:
                "Edwina's progress should be monitored on a weekly basis to ensure she is following her treatment plan and making progress towards her goals.",
            comments: '',
        } as any;
    };
}
