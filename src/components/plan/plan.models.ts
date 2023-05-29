import { BaseModel } from '@components/base/models/base.model';

export class PlanModel extends BaseModel {
    diagnosis: string = '';
    evaluation: string = '';
    intervention: string = '';
    longTermGoal: string = '';
    shortTermGoal: string = '';
    comments: string = '';
}
