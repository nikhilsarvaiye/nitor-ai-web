

import { RiskPatientService } from '@components/risk/risk.patient.service';
import { RiskPatientStore } from '@components/risk/risk.patient.store';

export const riskPatientService = new RiskPatientService();
export const riskPatientStore = new RiskPatientStore(riskPatientService);
export const riskPatientFilterStore = new RiskPatientStore(riskPatientService);

