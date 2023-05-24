

import { PatientService } from '@components/patient/patient.service';
import { PatientStore } from '@components/patient/patient.store';

export const patientService = new PatientService();
export const patientStore = new PatientStore(patientService);
export const patientFilterStore = new PatientStore(patientService);

