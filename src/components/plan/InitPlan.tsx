import { PlanService } from '@components/plan/plan.service';
import { PlanStore } from '@components/plan/plan.store';

export const planService = new PlanService();
export const planStore = new PlanStore(planService);
export const planFilterStore = new PlanStore(planService);
