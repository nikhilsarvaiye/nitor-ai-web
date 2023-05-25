import { ClinicalService } from '@components/clinical/clinical.service';
import { ClinicalStore } from '@components/clinical/clinical.store';

export const clinicalService = new ClinicalService();
export const clinicalStore = new ClinicalStore(clinicalService);
export const clinicalFilterStore = new ClinicalStore(clinicalService);
